-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `tbl_admcertinotes` (
	`note1` varchar(100) NOT NULL,
	`note2` varchar(100) NOT NULL,
	`note3` varchar(100) NOT NULL,
	`note4` varchar(100) NOT NULL,
	`note5` varchar(100) NOT NULL,
	`note6` varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_admission` (
	`regno` varchar(20) NOT NULL,
	`admno` varchar(25) NOT NULL,
	`name` varchar(30) NOT NULL,
	`class` varchar(5) NOT NULL,
	`roll` int NOT NULL,
	`house` varchar(20) NOT NULL,
	`section` varchar(20) NOT NULL,
	`dob` date NOT NULL,
	`gender` varchar(6) NOT NULL,
	`nationality` varchar(30) NOT NULL,
	`category` varchar(20) NOT NULL,
	`religion` varchar(30) NOT NULL,
	`bloodgroup` varchar(5) NOT NULL,
	`fname` varchar(30) NOT NULL,
	`foccu` varchar(30) NOT NULL,
	`fannual` varchar(30) NOT NULL,
	`fmob` varchar(11) NOT NULL,
	`mname` varchar(30) NOT NULL,
	`moccu` varchar(20) NOT NULL,
	`mannual` int NOT NULL,
	`mmob` varchar(11) NOT NULL,
	`gname` varchar(30) NOT NULL,
	`goccu` varchar(20) NOT NULL,
	`gannual` int NOT NULL,
	`whatsapp` varchar(11),
	`ptown` varchar(30) NOT NULL,
	`pps` varchar(30) NOT NULL,
	`pdist` varchar(30) NOT NULL,
	`pstate` varchar(30) NOT NULL,
	`ppin` int NOT NULL,
	`ctown` varchar(30) NOT NULL,
	`cps` varchar(30) NOT NULL,
	`cdist` varchar(30) NOT NULL,
	`cstate` varchar(20) NOT NULL,
	`cpin` varchar(6) NOT NULL,
	`prevschool` varchar(30) NOT NULL,
	`prevclass` varchar(6) NOT NULL,
	`doa` date NOT NULL,
	`testmarks` varchar(3) NOT NULL,
	`email` varchar(50) NOT NULL,
	`disability` varchar(4) NOT NULL,
	`disatype` varchar(30) NOT NULL,
	`schlor` int NOT NULL,
	`schlorofferedby` varchar(30) NOT NULL,
	`hostel` varchar(5) NOT NULL,
	`transport` varchar(5) NOT NULL,
	`imagepath` varchar(300) NOT NULL,
	`barcode` varchar(400) NOT NULL,
	`incharge` varchar(30) NOT NULL,
	`session` varchar(10) NOT NULL,
	`sessiondues` float(7,2) NOT NULL,
	`active` int NOT NULL,
	`coa` varchar(5) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_admissionfeepmt` (
	`admsrno` int NOT NULL,
	`admno` varchar(25) NOT NULL,
	`feetype` varchar(60) NOT NULL,
	`amount` float(7,2) NOT NULL,
	`paidamt` float(7,2) NOT NULL,
	`duesamt` float(7,2) NOT NULL,
	`date` date NOT NULL,
	`totamount` float(7,2) NOT NULL,
	`pmtmode` varchar(20) NOT NULL,
	`chno` varchar(30) NOT NULL,
	`bank` varchar(30) NOT NULL,
	`amtinword` varchar(300) NOT NULL,
	`concession` float(9,2) NOT NULL,
	`netamt` float(7,2) NOT NULL,
	`totamt` float(9,2) NOT NULL,
	`session` varchar(20) NOT NULL,
	`incharge` varchar(50) NOT NULL,
	`duesstatus` varchar(2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_admissionfeesetup` (
	`class` varchar(20) NOT NULL,
	`feetype` varchar(30) NOT NULL,
	`amount` float(7,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_admitnotes` (
	`note1` varchar(200) NOT NULL,
	`note2` varchar(200) NOT NULL,
	`note3` varchar(200) NOT NULL,
	`note4` varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_assetinfo` (
	`item_id` int NOT NULL,
	`item_name` varchar(30) NOT NULL,
	`item_size` varchar(30) NOT NULL,
	`old_qty` int NOT NULL,
	`updated_qty` int NOT NULL,
	`new_qty` int NOT NULL,
	`action` varchar(30) NOT NULL,
	`dou` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_attendance` (
	`sr` int AUTO_INCREMENT NOT NULL,
	`admno` varchar(20) NOT NULL,
	`sname` varchar(30) NOT NULL,
	`class` varchar(3) NOT NULL,
	`section` varchar(20) NOT NULL,
	`roll` varchar(2) NOT NULL,
	`session` varchar(9) NOT NULL,
	`status` varchar(1) NOT NULL,
	`adate` date NOT NULL,
	CONSTRAINT `sr` UNIQUE(`sr`)
);
--> statement-breakpoint
CREATE TABLE `tbl_attreport` (
	`admno` varchar(20) NOT NULL,
	`name` varchar(100) NOT NULL,
	`class` varchar(100) NOT NULL,
	`sec` varchar(100) NOT NULL,
	`roll` varchar(100) NOT NULL,
	`date` varchar(100) NOT NULL,
	`status` varchar(100) NOT NULL,
	`intime` varchar(100) NOT NULL,
	`lateby` varchar(100) NOT NULL,
	`outtime` varchar(100) NOT NULL,
	`earlyby` varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_book` (
	`class` varchar(10) NOT NULL,
	`book` varchar(30) NOT NULL,
	`price` float(7,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_category` (
	`itemcategory` varchar(30) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_cc` (
	`ccno` varchar(20) NOT NULL,
	`admno` varchar(20) NOT NULL,
	`sname` varchar(100) NOT NULL,
	`fname` varchar(100) NOT NULL,
	`dob` date NOT NULL,
	`dobinwords` varchar(100) NOT NULL,
	`conduct` varchar(50) NOT NULL,
	`passclass` varchar(50) NOT NULL,
	`passyear` varchar(10) NOT NULL,
	`doi` date NOT NULL,
	`barcodepath` varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_check` (
	`intime` varchar(5) NOT NULL,
	`outtime` varchar(5) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_class` (
	`class` varchar(30) NOT NULL,
	`sr` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_classhouseroll` (
	`class` varchar(20) NOT NULL,
	`house` int NOT NULL,
	`section` varchar(20) NOT NULL,
	`roll` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_contactbook` (
	`sr` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`mobile` varchar(10) NOT NULL,
	`address` varchar(200) NOT NULL,
	`email` varchar(150) NOT NULL,
	`description` varchar(100) NOT NULL,
	CONSTRAINT `tbl_contactbook_sr` PRIMARY KEY(`sr`)
);
--> statement-breakpoint
CREATE TABLE `tbl_dayboarderfeesetup` (
	`class` varchar(10) NOT NULL,
	`feetype` varchar(25) NOT NULL,
	`amount` float(7,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_dayexpense` (
	`srno` varchar(10) NOT NULL,
	`amount` float(9,2) NOT NULL,
	`particular` varchar(30) NOT NULL,
	`expby` varchar(30) NOT NULL,
	`voucher` varchar(30) NOT NULL,
	`date` date NOT NULL,
	`status` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_demandbillsetup` (
	`class` varchar(10) NOT NULL,
	`month` varchar(10) NOT NULL,
	`feetype` varchar(100) NOT NULL,
	`amount` float(7,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_demandbillstatus` (
	`month` varchar(5) NOT NULL,
	`status` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_demandnotes` (
	`note1` varchar(400) NOT NULL,
	`note2` varchar(400) NOT NULL,
	`note3` varchar(400) NOT NULL,
	`note4` varchar(400) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_eadmitcardnotes` (
	`note1` varchar(200)
);
--> statement-breakpoint
CREATE TABLE `tbl_emailconfig` (
	`user` varchar(50) NOT NULL,
	`pass` varchar(50) NOT NULL,
	`sendto` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_empatt` (
	`empid` varchar(20) NOT NULL,
	`date` date NOT NULL,
	`status` varchar(2) NOT NULL,
	`intime` time NOT NULL,
	`lateby` varchar(50) NOT NULL,
	`outtime` time NOT NULL,
	`earlyby` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_empattsetting` (
	`intime` time NOT NULL,
	`lunchtime` time NOT NULL,
	`outtime` time NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_empdellog` (
	`admno` varchar(25) NOT NULL,
	`deldate` date NOT NULL,
	`reason` varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_employeesetting` (
	`empid` varchar(20) NOT NULL,
	`name` varchar(30) NOT NULL,
	`gender` varchar(10) NOT NULL,
	`mob` varchar(12) NOT NULL,
	`phone` varchar(12) NOT NULL,
	`dob` date NOT NULL,
	`qualification` varchar(20) NOT NULL,
	`designation` varchar(50) NOT NULL,
	`fname` varchar(30) NOT NULL,
	`doj` date NOT NULL,
	`town` varchar(30) NOT NULL,
	`po` varchar(30) NOT NULL,
	`ps` varchar(30) NOT NULL,
	`dist` varchar(30) NOT NULL,
	`pin` int NOT NULL,
	`state` varchar(40) NOT NULL,
	`ppath` varchar(300) NOT NULL,
	`idpath` varchar(400) NOT NULL,
	`barcode` varchar(400) NOT NULL,
	`active` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_emprfid` (
	`empid` varchar(15) NOT NULL,
	`rfid` varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_enttestresult` (
	`regno` varchar(100) NOT NULL,
	`marks` varchar(10) NOT NULL,
	`classfitfor` varchar(20) NOT NULL,
	`att` varchar(5) NOT NULL,
	`remarks` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_eventlog` (
	`sr` int AUTO_INCREMENT NOT NULL,
	`uid` varchar(30) NOT NULL,
	`date` date NOT NULL,
	`time` varchar(10) NOT NULL,
	`event` varchar(50) NOT NULL,
	CONSTRAINT `tbl_eventlog_sr` PRIMARY KEY(`sr`)
);
--> statement-breakpoint
CREATE TABLE `tbl_examfee` (
	`class` varchar(5) NOT NULL,
	`apr` int NOT NULL,
	`may` int NOT NULL,
	`jun` int NOT NULL,
	`jul` int NOT NULL,
	`aug` int NOT NULL,
	`sep` int NOT NULL,
	`oct` int NOT NULL,
	`nov` int NOT NULL,
	`dece` int NOT NULL,
	`jan` int NOT NULL,
	`feb` int NOT NULL,
	`mar` int NOT NULL,
	`session` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_examname` (
	`sr` int NOT NULL,
	`examname` varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_exportdir` (
	`path` varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_feenotes` (
	`note1` varchar(400) NOT NULL,
	`note2` varchar(400) NOT NULL,
	`note3` varchar(400) NOT NULL,
	`note4` varchar(400) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_feepaymentdetail` (
	`sl` int AUTO_INCREMENT NOT NULL,
	`regno` varchar(20) NOT NULL,
	`apr` varchar(20) NOT NULL,
	`may` varchar(20) NOT NULL,
	`jun` varchar(20) NOT NULL,
	`jul` varchar(20) NOT NULL,
	`aug` varchar(20) NOT NULL,
	`sep` varchar(20) NOT NULL,
	`oct` varchar(20) NOT NULL,
	`nov` varchar(20) NOT NULL,
	`dec` varchar(20) NOT NULL,
	`jan` varchar(20) NOT NULL,
	`fab` varchar(20) NOT NULL,
	`mar` varchar(20) NOT NULL,
	`net_dues` int NOT NULL,
	`session` varchar(20) NOT NULL,
	CONSTRAINT `tbl_feepaymentdetail_sl` PRIMARY KEY(`sl`)
);
--> statement-breakpoint
CREATE TABLE `tbl_feereport` (
	`srno` int NOT NULL,
	`admno` varchar(20) NOT NULL,
	`month` varchar(100) NOT NULL,
	`monthfee` float(7,2) NOT NULL,
	`transport` varchar(50) NOT NULL,
	`transportfee` float(7,2) NOT NULL,
	`examfee` float(7,2) NOT NULL,
	`totamt` float(7,2) NOT NULL,
	`netamt` float(7,2) NOT NULL,
	`concession` float(7,2) NOT NULL,
	`payment` float(7,2) NOT NULL,
	`dues` float(7,2) NOT NULL,
	`date` date NOT NULL,
	`amtinword` varchar(400) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_frmname` (
	`menuname` varchar(100) NOT NULL,
	`frmname` varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_holidaysetup` (
	`hname` varchar(50) NOT NULL,
	`hcode` varchar(10) NOT NULL,
	`tot_day` int NOT NULL,
	`start_date` date NOT NULL,
	`end_date` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_hostelfee` (
	`admno` varchar(20) NOT NULL,
	`apr` float(7,2) NOT NULL,
	`may` float(7,2) NOT NULL,
	`jun` float(7,2) NOT NULL,
	`jul` float(7,2) NOT NULL,
	`aug` float(7,2) NOT NULL,
	`sep` float(7,2) NOT NULL,
	`oct` float(7,2) NOT NULL,
	`nov` float(7,2) NOT NULL,
	`dece` float(7,2) NOT NULL,
	`jan` float(7,2) NOT NULL,
	`feb` float(7,2) NOT NULL,
	`mar` float(7,2) NOT NULL,
	`session` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_hostelfeereport` (
	`srno` int NOT NULL,
	`admno` varchar(20) NOT NULL,
	`month` varchar(100) NOT NULL,
	`monthfee` float(7,2) NOT NULL,
	`totamt` float(7,2) NOT NULL,
	`netamt` float(7,2) NOT NULL,
	`concession` float(7,2) NOT NULL,
	`payment` float(7,2) NOT NULL,
	`billdues` float(7,2) NOT NULL,
	`dues` float(7,2) NOT NULL,
	`date` date NOT NULL,
	`amtinword` varchar(400) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_hostelfeesetup` (
	`class` varchar(10) NOT NULL,
	`feetype` varchar(25) NOT NULL,
	`amount` float(7,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_housemaster` (
	`house` varchar(20) NOT NULL,
	`colour` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_item` (
	`itemname` varchar(50) NOT NULL,
	`itemcategory` varchar(30) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_itembill` (
	`regno` varchar(30) NOT NULL,
	`rcpt` int NOT NULL,
	`item_name` varchar(20) NOT NULL,
	`item_size` varchar(5) NOT NULL,
	`quantity` int NOT NULL,
	`total_amount` int NOT NULL,
	`payment` int NOT NULL,
	`dues` int NOT NULL,
	`purchase_date` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_itemdetails` (
	`itemname` varchar(30) NOT NULL,
	`price` float(9,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_itemmaster` (
	`itemid` varchar(30) NOT NULL,
	`itemname` varchar(30) NOT NULL,
	`itemcat` varchar(30) NOT NULL,
	`itemsize` varchar(5) NOT NULL,
	`itemprice` float(7,2) NOT NULL,
	`itemtqty` int NOT NULL,
	`qty` int NOT NULL,
	`remarks` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_itemreceipt` (
	`srno` int NOT NULL,
	`name` varchar(100) NOT NULL,
	`class` varchar(10) NOT NULL,
	`admno` varchar(50) NOT NULL,
	`particular` varchar(200) NOT NULL,
	`quantity` int NOT NULL,
	`price` float(7,2) NOT NULL,
	`totamt` float(7,2) NOT NULL,
	`pament` float(7,2) NOT NULL,
	`dues` float(7,2) NOT NULL,
	`totalamt` float(9,2) NOT NULL,
	`saledate` date NOT NULL,
	`backdues` float(9,2) NOT NULL,
	`amtinword` varchar(200) NOT NULL,
	`incharge` varchar(25) NOT NULL,
	`pmtmode` varchar(25) NOT NULL,
	`refno` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_latefinedate` (
	`lday` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_login` (
	`uid` varchar(30) NOT NULL,
	`pwd` varchar(128) NOT NULL,
	`utype` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_miscfee` (
	`class` varchar(5) NOT NULL,
	`apr` int NOT NULL,
	`may` int NOT NULL,
	`jun` int NOT NULL,
	`jul` int NOT NULL,
	`aug` int NOT NULL,
	`sep` int NOT NULL,
	`oct` int NOT NULL,
	`nov` int NOT NULL,
	`dece` int NOT NULL,
	`jan` int NOT NULL,
	`feb` int NOT NULL,
	`mar` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_monthfee` (
	`admno` varchar(16),
	`apr` float(7,2),
	`may` float(7,2),
	`jun` float(7,2),
	`jul` float(7,2),
	`aug` float(7,2),
	`sep` float(7,2),
	`oct` float(7,2),
	`nov` float(7,2),
	`dece` float(7,2),
	`jan` float(7,2),
	`feb` float(7,2),
	`mar` float(7,2),
	`billdues` float(7,2),
	`session` varchar(9)
);
--> statement-breakpoint
CREATE TABLE `tbl_monthlyfeesetup` (
	`class` varchar(10) NOT NULL,
	`tuitionfee` float(7,2) NOT NULL,
	`libraryfee` float(7,2) NOT NULL,
	`compfee` float(7,2) NOT NULL,
	`labfee` float(7,2) NOT NULL,
	`sclassfee` float(7,2) NOT NULL,
	`examfee` float(7,2) NOT NULL,
	`miscfee` float(7,2) NOT NULL,
	`fine` float(7,2) NOT NULL,
	`transfine` float(7,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_printdaysummary` (
	`fdate` date NOT NULL,
	`todate` date NOT NULL,
	`prospectus` float(10,2) NOT NULL,
	`newadm` float(10,2) NOT NULL,
	`itemsale` float(10,2) NOT NULL,
	`readm` float(10,2) NOT NULL,
	`tuition` float(10,2) NOT NULL,
	`transport` float(10,2) NOT NULL,
	`hostel` float(10,2) NOT NULL,
	`latefee` float(10,2) NOT NULL,
	`exam` float(10,2) NOT NULL,
	`misc` float(10,2) NOT NULL,
	`backdues` float(10,2) NOT NULL,
	`total` float(10,2) NOT NULL,
	`concession` float(10,2) NOT NULL,
	`billdues` float(10,2) NOT NULL,
	`exp` float(10,2) NOT NULL,
	`netamt` float(10,2) NOT NULL,
	`bycash` float(10,2) NOT NULL,
	`amtinword` varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_pronotes` (
	`note1` varchar(100) NOT NULL,
	`note2` varchar(100) NOT NULL,
	`note3` varchar(100) NOT NULL,
	`note4` varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_prospectussale` (
	`rcpt_no` int NOT NULL DEFAULT 0,
	`form_no` int NOT NULL DEFAULT 0,
	`name` varchar(50) NOT NULL,
	`phone` varchar(12) NOT NULL,
	`town` varchar(50) NOT NULL,
	`po` varchar(50) NOT NULL,
	`ps` varchar(50) NOT NULL,
	`dist` varchar(50) NOT NULL,
	`pin` int NOT NULL,
	`tot_value` int NOT NULL,
	`tot_qty` int NOT NULL,
	`tot_amount` float(7,2) NOT NULL,
	`qty` int NOT NULL,
	`classes` varchar(200) NOT NULL,
	`incharge` varchar(50) NOT NULL,
	`pdate` date NOT NULL,
	`reg_status` varchar(3) NOT NULL,
	`amtinword` varchar(200) NOT NULL,
	`session` varchar(10) NOT NULL,
	`pmtmode` varchar(25) NOT NULL,
	`refno` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_readmission` (
	`readmsrno` int NOT NULL,
	`admno` varchar(30) NOT NULL,
	`session` varchar(10) NOT NULL,
	`feetype` varchar(30) NOT NULL,
	`amount` float(9,2) NOT NULL,
	`totamount` float(7,2) NOT NULL,
	`payment` float(7,2) NOT NULL,
	`concession` float(7,2) NOT NULL,
	`netamt` float(7,2) NOT NULL,
	`advance` float(7,2) NOT NULL,
	`dues` float(7,2) NOT NULL,
	`amtinword` varchar(300) NOT NULL,
	`rdate` date NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_registration` (
	`form_no` int NOT NULL,
	`regno` varchar(30) NOT NULL,
	`sname` varchar(30) NOT NULL,
	`gender` varchar(20) NOT NULL,
	`dob` date NOT NULL,
	`class` varchar(20) NOT NULL,
	`fname` varchar(30) NOT NULL,
	`fqual` varchar(30) NOT NULL,
	`foccu` varchar(30) NOT NULL,
	`mname` varchar(30) NOT NULL,
	`mqual` varchar(30) NOT NULL,
	`moccu` varchar(30) NOT NULL,
	`gname` varchar(30) NOT NULL,
	`gqual` varchar(30) NOT NULL,
	`goccu` varchar(30) NOT NULL,
	`p_town` varchar(100) NOT NULL,
	`p_po` varchar(100) NOT NULL,
	`p_ps` varchar(50) NOT NULL,
	`p_dist` varchar(50) NOT NULL,
	`p_pin` int NOT NULL,
	`p_state` varchar(50) NOT NULL,
	`c_town` varchar(100) NOT NULL,
	`c_po` varchar(100) NOT NULL,
	`c_ps` varchar(50) NOT NULL,
	`c_dist` varchar(100) NOT NULL,
	`c_pin` int NOT NULL,
	`c_state` varchar(50) NOT NULL,
	`contact1` varchar(15) NOT NULL,
	`contact2` varchar(15) NOT NULL,
	`prevschool` varchar(30) NOT NULL,
	`prevclass` varchar(10) NOT NULL,
	`regdate` date NOT NULL,
	`regincharge` varchar(30) NOT NULL,
	`testdate` date NOT NULL,
	`testtime` varchar(20) NOT NULL,
	`status` varchar(3) NOT NULL,
	`image_path` varchar(400) NOT NULL,
	`session` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_regnotes` (
	`note1` varchar(100) NOT NULL,
	`note2` varchar(100) NOT NULL,
	`note3` varchar(100) NOT NULL,
	`note4` varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_reportcard` (
	`admno` varchar(25) NOT NULL,
	`name` varchar(30) NOT NULL,
	`class` varchar(5) NOT NULL,
	`section` varchar(1) NOT NULL,
	`roll` varchar(2) NOT NULL,
	`dob` varchar(10) NOT NULL,
	`fname` varchar(30) NOT NULL,
	`fmob` varchar(10) NOT NULL,
	`examname` varchar(100) NOT NULL,
	`rdate` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_reportdemandbill` (
	`r1` varchar(50) NOT NULL,
	`r2` varchar(50) NOT NULL,
	`r3` varchar(50) NOT NULL,
	`r4` varchar(50) NOT NULL,
	`r5` float(10,2) NOT NULL,
	`r6` float(10,2) NOT NULL,
	`r7` float(10,2) NOT NULL,
	`r8` float(10,2) NOT NULL,
	`r9` varchar(50) NOT NULL,
	`r10` float(10,2) NOT NULL,
	`r11` varchar(50) NOT NULL,
	`r12` float(10,2) NOT NULL,
	`r13` varchar(50) NOT NULL,
	`r14` float(10,2) NOT NULL,
	`r15` float(10,2) NOT NULL,
	`r16` float(10,2) NOT NULL,
	`r17` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_rfid` (
	`admno` varchar(25) NOT NULL,
	`srfid` varchar(15) NOT NULL,
	`prfid` varchar(15) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_route` (
	`route` varchar(50)
);
--> statement-breakpoint
CREATE TABLE `tbl_routesetup` (
	`rtid` varchar(15) NOT NULL,
	`vno` varchar(20) NOT NULL,
	`toDes` varchar(30) NOT NULL,
	`fair` float(7,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_salenotes` (
	`note1` varchar(400) NOT NULL,
	`note2` varchar(400) NOT NULL,
	`note3` varchar(400) NOT NULL,
	`note4` varchar(400) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_schoolsetup` (
	`regno` varchar(50),
	`session` varchar(10),
	`title` varchar(50),
	`branch` varchar(50),
	`address` text,
	`city` varchar(20),
	`state` varchar(20),
	`country` varchar(20),
	`pincode` varchar(10),
	`contact1` varchar(15),
	`contact2` varchar(15),
	`email` varchar(30),
	`website` varchar(30),
	`setup_date` date NOT NULL,
	`shortcode` varchar(3) NOT NULL,
	`punchline` varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_section` (
	`section` varchar(10) NOT NULL,
	CONSTRAINT `tbl_section_section` PRIMARY KEY(`section`),
	CONSTRAINT `section` UNIQUE(`section`),
	CONSTRAINT `section_2` UNIQUE(`section`)
);
--> statement-breakpoint
CREATE TABLE `tbl_securityfeedetails` (
	`rcptno` varchar(10) NOT NULL,
	`admno` varchar(13) NOT NULL,
	`securityfee` int NOT NULL,
	`paidinclass` varchar(5) NOT NULL,
	`paidvia` varchar(15) NOT NULL,
	`paiddate` date NOT NULL,
	`status` varchar(20) NOT NULL,
	`session` varchar(9) NOT NULL,
	`incharge` varchar(25) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_securityfeesetup` (
	`class` varchar(5) NOT NULL,
	`fee` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_sessionclosingstatus` (
	`sr` int AUTO_INCREMENT NOT NULL,
	`session` varchar(10) NOT NULL,
	`status` varchar(10) NOT NULL,
	`cdate` date NOT NULL,
	`incharge` varchar(30) NOT NULL,
	CONSTRAINT `tbl_sessionclosingstatus_sr` PRIMARY KEY(`sr`)
);
--> statement-breakpoint
CREATE TABLE `tbl_sessionduedetail` (
	`sr` int AUTO_INCREMENT NOT NULL,
	`admno` varchar(20) NOT NULL,
	`mmonth` varchar(100) NOT NULL,
	`mamt` float(10,2) NOT NULL,
	`mfine` float(7,2) NOT NULL,
	`tmonth` varchar(100) NOT NULL,
	`tamt` float(10,2) NOT NULL,
	`tfine` float(7,2) NOT NULL,
	`hmonth` varchar(100) NOT NULL,
	`hamt` float(10,2) NOT NULL,
	`hfine` float(7,2) NOT NULL,
	`backdues` float(10,2) NOT NULL,
	`totamt` float(10,2) NOT NULL,
	`session` varchar(10) NOT NULL,
	`clossingdate` date NOT NULL,
	`incharge` varchar(50) NOT NULL,
	CONSTRAINT `tbl_sessionduedetail_sr` PRIMARY KEY(`sr`)
);
--> statement-breakpoint
CREATE TABLE `tbl_sessionfee` (
	`sr` int NOT NULL,
	`admno` varchar(20) NOT NULL,
	`feetype` varchar(100) NOT NULL,
	`amt` float(10,2) NOT NULL,
	`pmttype` varchar(20) NOT NULL,
	`session` varchar(10) NOT NULL,
	`date` date NOT NULL,
	`totamt` float(10,2) NOT NULL,
	`concession` float(10,2) NOT NULL,
	`netamt` float(10,2) NOT NULL,
	`payment` float(10,2) NOT NULL,
	`dues` float(10,2) NOT NULL,
	`amtinword` varchar(100) NOT NULL,
	`incharge` varchar(20) NOT NULL,
	`duesstatus` varchar(2) NOT NULL,
	`pmtmode` varchar(25) NOT NULL,
	`refno` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_sessionfeehostelsetup` (
	`class` varchar(10) NOT NULL,
	`feetype` varchar(40) NOT NULL,
	`amount` float(7,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_sessionfeesetup` (
	`class` varchar(10) NOT NULL,
	`feetype` varchar(40) NOT NULL,
	`amount` float(7,2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_sessionnotes` (
	`note1` varchar(200) NOT NULL,
	`note2` varchar(200) NOT NULL,
	`note3` varchar(200) NOT NULL,
	`note4` varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_settingstatus` (
	`frmname` varchar(50) NOT NULL,
	`status` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_smsgatewaysetting` (
	`uid` varchar(50) NOT NULL,
	`pwd` varchar(50) NOT NULL,
	`sid` varchar(6) NOT NULL,
	`adminno` bigint NOT NULL,
	`testmob` varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_smstemplate` (
	`eid` varchar(50) NOT NULL,
	`tid` varchar(50) NOT NULL,
	`tname` varchar(50) NOT NULL,
	`tsms` varchar(160) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stdatt` (
	`admno` varchar(20) NOT NULL,
	`date` date NOT NULL,
	`status` varchar(2) NOT NULL,
	`intime` time NOT NULL,
	`lateby` varchar(50) NOT NULL,
	`outtime` time NOT NULL,
	`earlyby` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stdattsetting` (
	`intime` time NOT NULL,
	`outtime` time NOT NULL,
	`lunchtime` time NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stdbackduesdetails` (
	`admno` varchar(15) NOT NULL,
	`monthfeesr` int NOT NULL,
	`date` date NOT NULL,
	`backduesdetails` varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stdconcessionlog` (
	`admno` varchar(20) NOT NULL,
	`monthfee` float(7,2) NOT NULL,
	`transportfee` float(7,2) NOT NULL,
	`hostelfee` float(7,2) NOT NULL,
	`date` date NOT NULL,
	`concby` varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stddellog` (
	`admno` varchar(25) NOT NULL,
	`deldate` date NOT NULL,
	`reason` varchar(200) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stdfeemaster` (
	`admno` varchar(16),
	`monthfee` int,
	`transportfee` int,
	`hostelfee` int,
	`session` varchar(9)
);
--> statement-breakpoint
CREATE TABLE `tbl_stdhostelfeedetail` (
	`sr` int AUTO_INCREMENT NOT NULL,
	`admno` varchar(20) NOT NULL,
	`pdate` date NOT NULL,
	`hmonth` varchar(100) NOT NULL,
	`hostelfee` float(7,2) NOT NULL,
	`backdues` float(7,2) NOT NULL,
	`fine` float(7,2) NOT NULL,
	`total` float(7,2) NOT NULL,
	`concession` float(7,2) NOT NULL,
	`netamt` float(7,2) NOT NULL,
	`paidamt` float(7,2) NOT NULL,
	`dues` float(7,2) NOT NULL,
	`amtinword` varchar(200) NOT NULL,
	`incharge` varchar(100) NOT NULL,
	CONSTRAINT `tbl_stdhostelfeedetail_sr` PRIMARY KEY(`sr`)
);
--> statement-breakpoint
CREATE TABLE `tbl_stdidcarddata` (
	`admno` varchar(20) NOT NULL,
	`name` varchar(50) NOT NULL,
	`fname` varchar(50) NOT NULL,
	`mname` varchar(50) NOT NULL,
	`class` varchar(10) NOT NULL,
	`sec` varchar(5) NOT NULL,
	`roll` int NOT NULL,
	`dob` date NOT NULL,
	`type` varchar(20) NOT NULL,
	`bgroup` varchar(10) NOT NULL,
	`route` varchar(20) NOT NULL,
	`destination` varchar(30) NOT NULL,
	`vill` varchar(30) NOT NULL,
	`ps` varchar(30) NOT NULL,
	`dist` varchar(30) NOT NULL,
	`pin` int NOT NULL,
	`state` varchar(30) NOT NULL,
	`mob` varchar(11) NOT NULL,
	`photo` varchar(30) NOT NULL,
	`barcode` varchar(30) NOT NULL,
	`session` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stdmarks` (
	`admno` varchar(20) NOT NULL,
	`examtype` varchar(50) NOT NULL,
	`session` varchar(20) NOT NULL,
	`english` int NOT NULL,
	`hindi` int NOT NULL,
	`maths` int NOT NULL,
	`science` int NOT NULL,
	`sst` int NOT NULL,
	`gk` int NOT NULL,
	`compscience` int NOT NULL,
	`maxmarks` int NOT NULL,
	`passmarks` int NOT NULL,
	`tmo` int NOT NULL,
	`percentage` float(3,1) NOT NULL,
	`grade` varchar(2) NOT NULL,
	`rank` int NOT NULL,
	`att` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stdmonthfeedetail` (
	`sr` int AUTO_INCREMENT NOT NULL,
	`admno` varchar(20) NOT NULL,
	`pdate` date NOT NULL,
	`tuitionfee` float(7,2) NOT NULL,
	`libraryfee` float(7,2) NOT NULL,
	`compfee` float(7,2) NOT NULL,
	`labfee` float(7,2) NOT NULL,
	`sclassfee` float(7,2) NOT NULL,
	`examfee` float(7,2) NOT NULL,
	`miscfee` float(7,2) NOT NULL,
	`sessionfee` float(10,2) NOT NULL,
	`fmonth` varchar(100) NOT NULL,
	`monthfee` float(7,2) NOT NULL,
	`tmonth` varchar(100) NOT NULL,
	`transfee` float(7,2) NOT NULL,
	`hmonth` varchar(100) NOT NULL,
	`hostelfee` float(7,2) NOT NULL,
	`backdues` float(7,2) NOT NULL,
	`fine` float(7,2) NOT NULL,
	`tfine` float(7,2) NOT NULL,
	`hfine` float(7,2) NOT NULL,
	`total` float(7,2) NOT NULL,
	`concession` float(7,2) NOT NULL,
	`netamt` float(7,2) NOT NULL,
	`paidamt` float(7,2) NOT NULL,
	`dues` float(7,2) NOT NULL,
	`amtinword` varchar(200) NOT NULL,
	`incharge` varchar(100) NOT NULL,
	`pmtmode` varchar(20),
	`pmtrefno` varchar(30),
	CONSTRAINT `tbl_stdmonthfeedetail_sr` PRIMARY KEY(`sr`)
);
--> statement-breakpoint
CREATE TABLE `tbl_stdscheme` (
	`admno` varchar(30) NOT NULL,
	`mscheme` varchar(30) NOT NULL,
	`mfee` float(9,2) NOT NULL,
	`tscheme` varchar(30) NOT NULL,
	`tfee` float(9,2) NOT NULL,
	`hscheme` varchar(30) NOT NULL,
	`hfee` float(9,2) NOT NULL,
	`session` varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stdtransdetail` (
	`admno` varchar(20) NOT NULL,
	`route` varchar(50) NOT NULL,
	`destination` varchar(50) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stockinventorylog` (
	`itemcategory` varchar(30) NOT NULL,
	`itemname` varchar(30) NOT NULL,
	`itemsize` varchar(20) NOT NULL,
	`old_qty` int NOT NULL,
	`updated_qty` int NOT NULL,
	`new_qty` int NOT NULL,
	`action` varchar(20) NOT NULL,
	`dou` datetime NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stocksetup` (
	`item_id` int NOT NULL,
	`item_name` varchar(50) NOT NULL,
	`item_size` varchar(50) NOT NULL,
	`item_price` float(7,2) NOT NULL,
	`item_count` int NOT NULL,
	`item_status` varchar(20),
	`threshold_quantity` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_stuconv` (
	`regno` varchar(20) NOT NULL,
	`routeid` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_studentreport` (
	`admno` varchar(20) NOT NULL,
	`name` varchar(100) NOT NULL,
	`class` varchar(100) NOT NULL,
	`sec` varchar(100) NOT NULL,
	`roll` varchar(100) NOT NULL,
	`gender` varchar(100) NOT NULL,
	`fname` varchar(100) NOT NULL,
	`address` varchar(200) NOT NULL,
	`mobile` varchar(10) NOT NULL,
	`date` varchar(20) NOT NULL,
	`r1` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_switches` (
	`frmmod` varchar(20) NOT NULL,
	`opt` varchar(20) NOT NULL,
	`status` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_tablereport` (
	`sl` int NOT NULL,
	`r1` varchar(100) NOT NULL,
	`r2` varchar(100) NOT NULL,
	`r3` varchar(100) NOT NULL,
	`r4` varchar(100) NOT NULL,
	`r5` varchar(100) NOT NULL,
	`r6` varchar(100) NOT NULL,
	`r7` varchar(100) NOT NULL,
	`r8` varchar(100) NOT NULL,
	`r9` varchar(100) NOT NULL,
	`r10` varchar(100) NOT NULL,
	`r11` varchar(100) NOT NULL,
	`r12` varchar(100) NOT NULL,
	`r13` varchar(100) NOT NULL,
	`r14` varchar(100) NOT NULL,
	`r15` varchar(100) NOT NULL,
	`r16` varchar(100) NOT NULL,
	`r17` varchar(100) NOT NULL,
	`r18` varchar(100) NOT NULL,
	`r19` varchar(100) NOT NULL,
	`r20` varchar(100) NOT NULL,
	`r21` varchar(100) NOT NULL,
	`r22` varchar(100) NOT NULL,
	`r23` varchar(100) NOT NULL,
	`r24` varchar(100) NOT NULL,
	`r25` varchar(100) NOT NULL,
	`r26` varchar(100) NOT NULL,
	`r27` varchar(100) NOT NULL,
	`r28` varchar(100) NOT NULL,
	`r30` varchar(100) NOT NULL,
	`r31` varchar(100) NOT NULL,
	`r32` varchar(100) NOT NULL,
	`r33` varchar(100) NOT NULL,
	`r34` varchar(100) NOT NULL,
	`r35` varchar(100) NOT NULL,
	`r36` longblob NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_tc` (
	`tcno` varchar(20) NOT NULL,
	`admno` varchar(20) NOT NULL,
	`sname` varchar(50) NOT NULL,
	`fname` varchar(50) NOT NULL,
	`mname` varchar(50) NOT NULL,
	`nationality` varchar(20) NOT NULL,
	`scst` varchar(20) NOT NULL,
	`dofa` date NOT NULL,
	`dofaclass` varchar(10) NOT NULL,
	`dob` date NOT NULL,
	`dobinwords` varchar(100) NOT NULL,
	`lastclass` varchar(10) NOT NULL,
	`lastclassinwords` varchar(10) NOT NULL,
	`lastschbrd` varchar(50) NOT NULL,
	`failed` varchar(10) NOT NULL,
	`subjectstudied` varchar(100) NOT NULL,
	`qualiforpromo` varchar(10) NOT NULL,
	`promoclass` varchar(10) NOT NULL,
	`promoclassinwords` varchar(25) NOT NULL,
	`monthuptopaid` varchar(10) NOT NULL,
	`feeconcession` varchar(10) NOT NULL,
	`totworkdays` int NOT NULL,
	`totworkdayspresent` int NOT NULL,
	`ncc` varchar(20) NOT NULL,
	`games` varchar(30) NOT NULL,
	`genconduct` varchar(20) NOT NULL,
	`doacerti` date NOT NULL,
	`doicerti` date NOT NULL,
	`reason` varchar(50) NOT NULL,
	`remarks` varchar(70) NOT NULL,
	`prepby` varchar(50) NOT NULL,
	`checkby` varchar(50) NOT NULL,
	`barcodepath` varchar(300) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_testdate` (
	`etid` int NOT NULL,
	`class` varchar(30) NOT NULL,
	`testdate` date NOT NULL,
	`testtime` varchar(15) NOT NULL,
	`subject` varchar(100) NOT NULL,
	`venue` varchar(100) NOT NULL,
	`status` varchar(10) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_transcompsetup` (
	`compname` varchar(100),
	`owner` varchar(100),
	`address` varchar(200),
	`contact1` varchar(12),
	`contact2` varchar(12),
	`email` varchar(100),
	`website` varchar(100),
	`setup_date` date
);
--> statement-breakpoint
CREATE TABLE `tbl_transportfee` (
	`admno` varchar(16),
	`apr` float(7,2),
	`may` float(7,2),
	`jun` float(7,2),
	`jul` float(7,2),
	`aug` float(7,2),
	`sep` float(7,2),
	`oct` float(7,2),
	`nov` float(7,2),
	`dece` float(7,2),
	`jan` float(7,2),
	`feb` float(7,2),
	`mar` float(7,2),
	`session` varchar(9)
);
--> statement-breakpoint
CREATE TABLE `tbl_userlog` (
	`sr` int NOT NULL,
	`uid` varchar(30) NOT NULL,
	`date` date NOT NULL,
	`logintime` varchar(10) NOT NULL,
	`logouttime` varchar(10) NOT NULL,
	`duration` varchar(20) NOT NULL,
	CONSTRAINT `tbl_userlog_sr` PRIMARY KEY(`sr`)
);
--> statement-breakpoint
CREATE TABLE `tbl_userroles` (
	`user` varchar(40) NOT NULL,
	`menuname` varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `tbl_vehiclesetup` (
	`vid` int NOT NULL,
	`vno` varchar(20) NOT NULL,
	`vtitle` varchar(30) NOT NULL,
	`vdriver` varchar(30) NOT NULL,
	`vconductor` varchar(30) NOT NULL,
	`mob` varchar(11) NOT NULL
);

*/