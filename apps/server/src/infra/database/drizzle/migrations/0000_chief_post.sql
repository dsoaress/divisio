CREATE TABLE "sessions" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"user_id" varchar(24) NOT NULL,
	"created_at" timestamp (6) with time zone NOT NULL,
	"expires_at" timestamp (6) with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"first_name" varchar(50) NOT NULL,
	"last_name" varchar(50) NOT NULL,
	"email" varchar(255) NOT NULL,
	"avatar" varchar(255),
	"created_at" timestamp (6) with time zone NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE "group_members" (
	"group_id" varchar(24) NOT NULL,
	"member_id" varchar(24) NOT NULL,
	"created_at" timestamp (6) with time zone NOT NULL,
	CONSTRAINT "group_members_group_id_member_id_pk" PRIMARY KEY("group_id","member_id")
);
--> statement-breakpoint
CREATE TABLE "group_transaction_participants" (
	"group_transaction_id" varchar(24) NOT NULL,
	"member_id" varchar(24) NOT NULL,
	"group_id" varchar(24) NOT NULL,
	"payer_member_id" varchar(24) NOT NULL,
	"amount" integer NOT NULL,
	CONSTRAINT "group_transaction_participants_group_transaction_id_member_id_pk" PRIMARY KEY("group_transaction_id","member_id")
);
--> statement-breakpoint
CREATE TABLE "group_transactions" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"amount" integer NOT NULL,
	"group_id" varchar(24) NOT NULL,
	"payer_member_id" varchar(24) NOT NULL,
	"date" timestamp (6) with time zone NOT NULL,
	"created_by" varchar(24) NOT NULL,
	"created_at" timestamp (6) with time zone NOT NULL,
	"updated_by" varchar(24),
	"updated_at" timestamp (6) with time zone
);
--> statement-breakpoint
CREATE TABLE "groups" (
	"id" varchar(24) PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"currency" varchar(3) NOT NULL,
	"created_by" varchar(24) NOT NULL,
	"created_at" timestamp (6) with time zone NOT NULL,
	"updated_by" varchar(24),
	"updated_at" timestamp (6) with time zone
);
--> statement-breakpoint
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "group_members" ADD CONSTRAINT "group_members_member_id_users_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "group_transaction_participants" ADD CONSTRAINT "group_transaction_participants_group_transaction_id_group_transactions_id_fk" FOREIGN KEY ("group_transaction_id") REFERENCES "public"."group_transactions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "group_transaction_participants" ADD CONSTRAINT "group_transaction_participants_member_id_users_id_fk" FOREIGN KEY ("member_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "group_transaction_participants" ADD CONSTRAINT "group_transaction_participants_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "group_transaction_participants" ADD CONSTRAINT "group_transaction_participants_payer_member_id_users_id_fk" FOREIGN KEY ("payer_member_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "group_transactions" ADD CONSTRAINT "group_transactions_group_id_groups_id_fk" FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "group_transactions" ADD CONSTRAINT "group_transactions_payer_member_id_users_id_fk" FOREIGN KEY ("payer_member_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "group_transactions" ADD CONSTRAINT "group_transactions_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "group_transactions" ADD CONSTRAINT "group_transactions_updated_by_users_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "groups" ADD CONSTRAINT "groups_created_by_users_id_fk" FOREIGN KEY ("created_by") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "groups" ADD CONSTRAINT "groups_updated_by_users_id_fk" FOREIGN KEY ("updated_by") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "group_transactions_group_id_index" ON "group_transactions" USING btree ("group_id");