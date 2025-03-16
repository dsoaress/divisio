import { faker } from '@faker-js/faker'
import { createId } from '@paralleldrive/cuid2'

type Input = {
  usersCount: number
  groupsCount: number
  transactionsPerUserPerGroup: number
}

type Output = {
  usersData: {
    id: string
    firstName: string
    lastName: string
    email: string
    avatar: string
    createdAt: Date
  }[]
  groupsData: {
    id: string
    name: string
    currency: string
    createdBy: string
    createdAt: Date
  }[]
  groupMembersData: {
    groupId: string
    memberId: string
    createdAt: Date
  }[]
  groupTransactionsData: {
    id: string
    name: string
    amount: number
    groupId: string
    payerMemberId: string
    date: Date
    createdBy: string
    createdAt: Date
  }[]
  groupTransactionParticipantsData: {
    groupTransactionId: string
    memberId: string
    amount: number
    payerMemberId: string
    groupId: string
  }[]
}

const USER_IDS = [
  'is0k2tosseuislm4niylbuye',
  'wu40ypikmylqohh5jwqxbsi4',
  'ez68vex4lvlpq8w7sncq4h2i',
  'jr9loitvk8i2r562qg3jau4x',
  'gu1sji4idpd9qnmkn2wvwdoq'
]
const FIRST_GROUP_ID = 'adsiiktu8legs3hrbdi62qla'
const FIRST_GROUP_TRANSACTION_ID = 'mqywrmwz4dfo4tpsqzjaa7a0'

export function data({ usersCount, groupsCount, transactionsPerUserPerGroup }: Input): Output {
  const usersData = Array.from({ length: usersCount }, (_, i) => ({
    id: USER_IDS[i] ?? createId(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email().toLowerCase(),
    avatar: faker.image.avatar(),
    createdAt: faker.date.recent()
  }))

  enum currencies {
    USD = 'USD',
    EUR = 'EUR',
    BRL = 'BRL'
  }

  const groupsData = Array.from({ length: groupsCount }, (_, i) => ({
    id: i === 0 ? FIRST_GROUP_ID : createId(),
    name: faker.lorem.words(2),
    currency: faker.helpers.enumValue(currencies),
    createdBy: usersData[i % usersCount].id,
    createdAt: faker.date.recent()
  }))

  const groupMembersData = groupsData.flatMap(group =>
    Array.from({ length: usersCount }, (_, i) => ({
      groupId: group.id,
      memberId: usersData[i].id,
      createdAt: faker.date.recent()
    }))
  )

  const groupTransactionsData = groupsData.flatMap((group, i) =>
    Array.from({ length: transactionsPerUserPerGroup }, (_, j) => {
      const payerMemberId = usersData[j % usersCount].id
      return {
        id: i + j === 0 ? FIRST_GROUP_TRANSACTION_ID : createId(),
        name: faker.lorem.words(2),
        amount: faker.number.int({ max: 100000 }),
        groupId: group.id,
        payerMemberId,
        date: faker.date.recent(),
        createdBy: payerMemberId,
        createdAt: faker.date.recent()
      }
    })
  )

  const groupTransactionParticipantsData = groupTransactionsData.flatMap(transaction => {
    const amount = Number.parseInt(String(transaction.amount / usersCount))
    return groupMembersData
      .filter(member => member.groupId === transaction.groupId)
      .map(member => ({
        groupTransactionId: transaction.id,
        memberId: member.memberId,
        amount,
        payerMemberId: transaction.payerMemberId,
        groupId: transaction.groupId
      }))
  })

  return {
    usersData,
    groupsData,
    groupMembersData,
    groupTransactionsData,
    groupTransactionParticipantsData
  }
}
