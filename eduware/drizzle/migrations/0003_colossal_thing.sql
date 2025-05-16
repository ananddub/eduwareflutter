CREATE TABLE `tbl_auth` (
	`phone` varchar(15) NOT NULL,
	`database` varchar(100) NOT NULL,
	`password` varchar(100) NOT NULL,
	`role` varchar(100) NOT NULL DEFAULT 'user',
	CONSTRAINT `tbl_auth_phone_unique` UNIQUE(`phone`)
);
--> statement-breakpoint
ALTER TABLE `tbl_switches` ADD `switch` varchar(50) NOT NULL;--> statement-breakpoint
ALTER TABLE `tbl_photo` ADD CONSTRAINT `tbl_photo_admno_unique` UNIQUE(`admno`);--> statement-breakpoint
ALTER TABLE `tbl_switches` DROP COLUMN `frmmod`;--> statement-breakpoint
ALTER TABLE `tbl_switches` DROP COLUMN `opt`;