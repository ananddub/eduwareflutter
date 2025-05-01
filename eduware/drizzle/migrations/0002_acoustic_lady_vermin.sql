CREATE TABLE `tbl_photo` (
	`admno` varchar(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`url` varchar(255) NOT NULL,
	`size` int NOT NULL,
	`type` varchar(50) NOT NULL,
	`createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);
