import {
    mysqlTable,
    mysqlSchema,
    AnyMySqlColumn,
    varchar,
    int,
    date,
    float,
    datetime,
    unique,
    primaryKey,
    time,
    text,
    bigint,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';

export const tblAuth = mysqlTable('tbl_auth', {
    phoneNo: varchar('phone', { length: 15 }).notNull().unique(),
    database: varchar('database', { length: 100 }).notNull(),
    password: varchar('password', { length: 100 }).notNull(),
    role: varchar('role', { length: 100 }).notNull().default('user'),
});

export const tblPhoto = mysqlTable('tbl_photo', {
    admno: varchar('admno', { length: 36 }).notNull().unique(),
    name: varchar('name', { length: 255 }).notNull(),
    url: varchar('url', { length: 255 }).notNull(),
    size: int('size').notNull(),
    type: varchar('type', { length: 50 }).notNull(),
    createdAt: datetime('createdAt')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
});
export const tblAdmcertinotes = mysqlTable('tbl_admcertinotes', {
    note1: varchar({ length: 100 }).notNull(),
    note2: varchar({ length: 100 }).notNull(),
    note3: varchar({ length: 100 }).notNull(),
    note4: varchar({ length: 100 }).notNull(),
    note5: varchar({ length: 100 }).notNull(),
    note6: varchar({ length: 100 }).notNull(),
});

export const tblAdmission = mysqlTable('tbl_admission', {
    regno: varchar({ length: 20 }).notNull(),
    admno: varchar({ length: 25 }).notNull(),
    name: varchar({ length: 30 }).notNull(),
    class: varchar({ length: 5 }).notNull(),
    roll: int().notNull(),
    house: varchar({ length: 20 }).notNull(),
    section: varchar({ length: 20 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dob: date({ mode: 'string' }).notNull(),
    gender: varchar({ length: 6 }).notNull(),
    nationality: varchar({ length: 30 }).notNull(),
    category: varchar({ length: 20 }).notNull(),
    religion: varchar({ length: 30 }).notNull(),
    bloodgroup: varchar({ length: 5 }).notNull(),
    fname: varchar({ length: 30 }).notNull(),
    foccu: varchar({ length: 30 }).notNull(),
    fannual: varchar({ length: 30 }).notNull(),
    fmob: varchar({ length: 11 }).notNull(),
    mname: varchar({ length: 30 }).notNull(),
    moccu: varchar({ length: 20 }).notNull(),
    mannual: int().notNull(),
    mmob: varchar({ length: 11 }).notNull(),
    gname: varchar({ length: 30 }).notNull(),
    goccu: varchar({ length: 20 }).notNull(),
    gannual: int().notNull(),
    whatsapp: varchar({ length: 11 }),
    ptown: varchar({ length: 30 }).notNull(),
    pps: varchar({ length: 30 }).notNull(),
    pdist: varchar({ length: 30 }).notNull(),
    pstate: varchar({ length: 30 }).notNull(),
    ppin: int().notNull(),
    ctown: varchar({ length: 30 }).notNull(),
    cps: varchar({ length: 30 }).notNull(),
    cdist: varchar({ length: 30 }).notNull(),
    cstate: varchar({ length: 20 }).notNull(),
    cpin: varchar({ length: 6 }).notNull(),
    prevschool: varchar({ length: 30 }).notNull(),
    prevclass: varchar({ length: 6 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    doa: date({ mode: 'string' }).notNull(),
    testmarks: varchar({ length: 3 }).notNull(),
    email: varchar({ length: 50 }).notNull(),
    disability: varchar({ length: 4 }).notNull(),
    disatype: varchar({ length: 30 }).notNull(),
    schlor: int().notNull(),
    schlorofferedby: varchar({ length: 30 }).notNull(),
    hostel: varchar({ length: 5 }).notNull(),
    transport: varchar({ length: 5 }).notNull(),
    imagepath: varchar({ length: 300 }).notNull(),
    barcode: varchar({ length: 400 }).notNull(),
    incharge: varchar({ length: 30 }).notNull(),
    session: varchar({ length: 10 }).notNull(),
    sessiondues: float({ precision: 7, scale: 2 }).notNull(),
    active: int().notNull(),
    coa: varchar({ length: 5 }).notNull(),
});

export const tblAdmissionfeepmt = mysqlTable('tbl_admissionfeepmt', {
    admsrno: int().notNull(),
    admno: varchar({ length: 25 }).notNull(),
    feetype: varchar({ length: 60 }).notNull(),
    amount: float({ precision: 7, scale: 2 }).notNull(),
    paidamt: float({ precision: 7, scale: 2 }).notNull(),
    duesamt: float({ precision: 7, scale: 2 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date({ mode: 'string' }).notNull(),
    totamount: float({ precision: 7, scale: 2 }).notNull(),
    pmtmode: varchar({ length: 20 }).notNull(),
    chno: varchar({ length: 30 }).notNull(),
    bank: varchar({ length: 30 }).notNull(),
    amtinword: varchar({ length: 300 }).notNull(),
    concession: float({ precision: 9, scale: 2 }).notNull(),
    netamt: float({ precision: 7, scale: 2 }).notNull(),
    totamt: float({ precision: 9, scale: 2 }).notNull(),
    session: varchar({ length: 20 }).notNull(),
    incharge: varchar({ length: 50 }).notNull(),
    duesstatus: varchar({ length: 2 }).notNull(),
});

export const tblAdmissionfeesetup = mysqlTable('tbl_admissionfeesetup', {
    class: varchar({ length: 20 }).notNull(),
    feetype: varchar({ length: 30 }).notNull(),
    amount: float({ precision: 7, scale: 2 }).notNull(),
});

export const tblAdmitnotes = mysqlTable('tbl_admitnotes', {
    note1: varchar({ length: 200 }).notNull(),
    note2: varchar({ length: 200 }).notNull(),
    note3: varchar({ length: 200 }).notNull(),
    note4: varchar({ length: 200 }).notNull(),
});

export const tblAssetinfo = mysqlTable('tbl_assetinfo', {
    itemId: int('item_id').notNull(),
    itemName: varchar('item_name', { length: 30 }).notNull(),
    itemSize: varchar('item_size', { length: 30 }).notNull(),
    oldQty: int('old_qty').notNull(),
    updatedQty: int('updated_qty').notNull(),
    newQty: int('new_qty').notNull(),
    action: varchar({ length: 30 }).notNull(),
    dou: datetime({ mode: 'string' }).notNull(),
});

export const tblAttendance = mysqlTable(
    'tbl_attendance',
    {
        sr: int().autoincrement().notNull(),
        admno: varchar({ length: 20 }).notNull(),
        sname: varchar({ length: 30 }).notNull(),
        class: varchar({ length: 3 }).notNull(),
        section: varchar({ length: 20 }).notNull(),
        roll: varchar({ length: 2 }).notNull(),
        session: varchar({ length: 9 }).notNull(),
        status: varchar({ length: 1 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        adate: date({ mode: 'string' }).notNull(),
    },
    (table) => [unique('sr').on(table.sr)],
);

export const tblAttreport = mysqlTable('tbl_attreport', {
    admno: varchar({ length: 20 }).notNull(),
    name: varchar({ length: 100 }).notNull(),
    class: varchar({ length: 100 }).notNull(),
    sec: varchar({ length: 100 }).notNull(),
    roll: varchar({ length: 100 }).notNull(),
    date: varchar({ length: 100 }).notNull(),
    status: varchar({ length: 100 }).notNull(),
    intime: varchar({ length: 100 }).notNull(),
    lateby: varchar({ length: 100 }).notNull(),
    outtime: varchar({ length: 100 }).notNull(),
    earlyby: varchar({ length: 100 }).notNull(),
});

export const tblBook = mysqlTable('tbl_book', {
    class: varchar({ length: 10 }).notNull(),
    book: varchar({ length: 30 }).notNull(),
    price: float({ precision: 7, scale: 2 }).notNull(),
});

export const tblCategory = mysqlTable('tbl_category', {
    itemcategory: varchar({ length: 30 }).notNull(),
});

export const tblCc = mysqlTable('tbl_cc', {
    ccno: varchar({ length: 20 }).notNull(),
    admno: varchar({ length: 20 }).notNull(),
    sname: varchar({ length: 100 }).notNull(),
    fname: varchar({ length: 100 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dob: date({ mode: 'string' }).notNull(),
    dobinwords: varchar({ length: 100 }).notNull(),
    conduct: varchar({ length: 50 }).notNull(),
    passclass: varchar({ length: 50 }).notNull(),
    passyear: varchar({ length: 10 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    doi: date({ mode: 'string' }).notNull(),
    barcodepath: varchar({ length: 200 }).notNull(),
});

export const tblCheck = mysqlTable('tbl_check', {
    intime: varchar({ length: 5 }).notNull(),
    outtime: varchar({ length: 5 }).notNull(),
});

export const tblClass = mysqlTable('tbl_class', {
    class: varchar({ length: 30 }).notNull(),
    sr: int().notNull(),
});

export const tblClasshouseroll = mysqlTable('tbl_classhouseroll', {
    class: varchar({ length: 20 }).notNull(),
    house: int().notNull(),
    section: varchar({ length: 20 }).notNull(),
    roll: int().notNull(),
});

export const tblContactbook = mysqlTable(
    'tbl_contactbook',
    {
        sr: int().autoincrement().notNull(),
        name: varchar({ length: 100 }).notNull(),
        mobile: varchar({ length: 10 }).notNull(),
        address: varchar({ length: 200 }).notNull(),
        email: varchar({ length: 150 }).notNull(),
        description: varchar({ length: 100 }).notNull(),
    },
    (table) => [
        primaryKey({ columns: [table.sr], name: 'tbl_contactbook_sr' }),
    ],
);

export const tblDayboarderfeesetup = mysqlTable('tbl_dayboarderfeesetup', {
    class: varchar({ length: 10 }).notNull(),
    feetype: varchar({ length: 25 }).notNull(),
    amount: float({ precision: 7, scale: 2 }).notNull(),
});

export const tblDayexpense = mysqlTable('tbl_dayexpense', {
    srno: varchar({ length: 10 }).notNull(),
    amount: float({ precision: 9, scale: 2 }).notNull(),
    particular: varchar({ length: 30 }).notNull(),
    expby: varchar({ length: 30 }).notNull(),
    voucher: varchar({ length: 30 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date({ mode: 'string' }).notNull(),
    status: int().notNull(),
});

export const tblDemandbillsetup = mysqlTable('tbl_demandbillsetup', {
    class: varchar({ length: 10 }).notNull(),
    month: varchar({ length: 10 }).notNull(),
    feetype: varchar({ length: 100 }).notNull(),
    amount: float({ precision: 7, scale: 2 }).notNull(),
});

export const tblDemandbillstatus = mysqlTable('tbl_demandbillstatus', {
    month: varchar({ length: 5 }).notNull(),
    status: varchar({ length: 10 }).notNull(),
});

export const tblDemandnotes = mysqlTable('tbl_demandnotes', {
    note1: varchar({ length: 400 }).notNull(),
    note2: varchar({ length: 400 }).notNull(),
    note3: varchar({ length: 400 }).notNull(),
    note4: varchar({ length: 400 }).notNull(),
});

export const tblEadmitcardnotes = mysqlTable('tbl_eadmitcardnotes', {
    note1: varchar({ length: 200 }),
});

export const tblEmailconfig = mysqlTable('tbl_emailconfig', {
    user: varchar({ length: 50 }).notNull(),
    pass: varchar({ length: 50 }).notNull(),
    sendto: varchar({ length: 50 }).notNull(),
});

export const tblEmpatt = mysqlTable('tbl_empatt', {
    empid: varchar({ length: 20 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date({ mode: 'string' }).notNull(),
    status: varchar({ length: 2 }).notNull(),
    intime: time().notNull(),
    lateby: varchar({ length: 50 }).notNull(),
    outtime: time().notNull(),
    earlyby: varchar({ length: 20 }).notNull(),
});

export const tblEmpattsetting = mysqlTable('tbl_empattsetting', {
    intime: time().notNull(),
    lunchtime: time().notNull(),
    outtime: time().notNull(),
});

export const tblEmpdellog = mysqlTable('tbl_empdellog', {
    admno: varchar({ length: 25 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    deldate: date({ mode: 'string' }).notNull(),
    reason: varchar({ length: 200 }).notNull(),
});

export const tblEmployeesetting = mysqlTable('tbl_employeesetting', {
    empid: varchar({ length: 20 }).notNull(),
    name: varchar({ length: 30 }).notNull(),
    gender: varchar({ length: 10 }).notNull(),
    mob: varchar({ length: 12 }).notNull(),
    phone: varchar({ length: 12 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dob: date({ mode: 'string' }).notNull(),
    qualification: varchar({ length: 20 }).notNull(),
    designation: varchar({ length: 50 }).notNull(),
    fname: varchar({ length: 30 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    doj: date({ mode: 'string' }).notNull(),
    town: varchar({ length: 30 }).notNull(),
    po: varchar({ length: 30 }).notNull(),
    ps: varchar({ length: 30 }).notNull(),
    dist: varchar({ length: 30 }).notNull(),
    pin: int().notNull(),
    state: varchar({ length: 40 }).notNull(),
    ppath: varchar({ length: 300 }).notNull(),
    idpath: varchar({ length: 400 }).notNull(),
    barcode: varchar({ length: 400 }).notNull(),
    active: int().notNull(),
});

export const tblEmprfid = mysqlTable('tbl_emprfid', {
    empid: varchar({ length: 15 }).notNull(),
    rfid: varchar({ length: 15 }).notNull(),
});

export const tblEnttestresult = mysqlTable('tbl_enttestresult', {
    regno: varchar({ length: 100 }).notNull(),
    marks: varchar({ length: 10 }).notNull(),
    classfitfor: varchar({ length: 20 }).notNull(),
    att: varchar({ length: 5 }).notNull(),
    remarks: varchar({ length: 50 }).notNull(),
});

export const tblEventlog = mysqlTable(
    'tbl_eventlog',
    {
        sr: int().autoincrement().notNull(),
        uid: varchar({ length: 30 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        date: date({ mode: 'string' }).notNull(),
        time: varchar({ length: 10 }).notNull(),
        event: varchar({ length: 50 }).notNull(),
    },
    (table) => [primaryKey({ columns: [table.sr], name: 'tbl_eventlog_sr' })],
);

export const tblExamfee = mysqlTable('tbl_examfee', {
    class: varchar({ length: 5 }).notNull(),
    apr: int().notNull(),
    may: int().notNull(),
    jun: int().notNull(),
    jul: int().notNull(),
    aug: int().notNull(),
    sep: int().notNull(),
    oct: int().notNull(),
    nov: int().notNull(),
    dece: int().notNull(),
    jan: int().notNull(),
    feb: int().notNull(),
    mar: int().notNull(),
    session: int().notNull(),
});

export const tblExamname = mysqlTable('tbl_examname', {
    sr: int().notNull(),
    examname: varchar({ length: 100 }).notNull(),
});

export const tblExportdir = mysqlTable('tbl_exportdir', {
    path: varchar({ length: 200 }).notNull(),
});

export const tblFeenotes = mysqlTable('tbl_feenotes', {
    note1: varchar({ length: 400 }).notNull(),
    note2: varchar({ length: 400 }).notNull(),
    note3: varchar({ length: 400 }).notNull(),
    note4: varchar({ length: 400 }).notNull(),
});

export const tblFeepaymentdetail = mysqlTable(
    'tbl_feepaymentdetail',
    {
        sl: int().autoincrement().notNull(),
        regno: varchar({ length: 20 }).notNull(),
        apr: varchar({ length: 20 }).notNull(),
        may: varchar({ length: 20 }).notNull(),
        jun: varchar({ length: 20 }).notNull(),
        jul: varchar({ length: 20 }).notNull(),
        aug: varchar({ length: 20 }).notNull(),
        sep: varchar({ length: 20 }).notNull(),
        oct: varchar({ length: 20 }).notNull(),
        nov: varchar({ length: 20 }).notNull(),
        dec: varchar({ length: 20 }).notNull(),
        jan: varchar({ length: 20 }).notNull(),
        fab: varchar({ length: 20 }).notNull(),
        mar: varchar({ length: 20 }).notNull(),
        netDues: int('net_dues').notNull(),
        session: varchar({ length: 20 }).notNull(),
    },
    (table) => [
        primaryKey({ columns: [table.sl], name: 'tbl_feepaymentdetail_sl' }),
    ],
);

export const tblFeereport = mysqlTable('tbl_feereport', {
    srno: int().notNull(),
    admno: varchar({ length: 20 }).notNull(),
    month: varchar({ length: 100 }).notNull(),
    monthfee: float({ precision: 7, scale: 2 }).notNull(),
    transport: varchar({ length: 50 }).notNull(),
    transportfee: float({ precision: 7, scale: 2 }).notNull(),
    examfee: float({ precision: 7, scale: 2 }).notNull(),
    totamt: float({ precision: 7, scale: 2 }).notNull(),
    netamt: float({ precision: 7, scale: 2 }).notNull(),
    concession: float({ precision: 7, scale: 2 }).notNull(),
    payment: float({ precision: 7, scale: 2 }).notNull(),
    dues: float({ precision: 7, scale: 2 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date({ mode: 'string' }).notNull(),
    amtinword: varchar({ length: 400 }).notNull(),
});

export const tblFrmname = mysqlTable('tbl_frmname', {
    menuname: varchar({ length: 100 }).notNull(),
    frmname: varchar({ length: 100 }).notNull(),
});

export const tblHolidaysetup = mysqlTable('tbl_holidaysetup', {
    hname: varchar({ length: 50 }).notNull(),
    hcode: varchar({ length: 10 }).notNull(),
    totDay: int('tot_day').notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    startDate: date('start_date', { mode: 'string' }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    endDate: date('end_date', { mode: 'string' }).notNull(),
});

export const tblHostelfee = mysqlTable('tbl_hostelfee', {
    admno: varchar({ length: 20 }).notNull(),
    apr: float({ precision: 7, scale: 2 }).notNull(),
    may: float({ precision: 7, scale: 2 }).notNull(),
    jun: float({ precision: 7, scale: 2 }).notNull(),
    jul: float({ precision: 7, scale: 2 }).notNull(),
    aug: float({ precision: 7, scale: 2 }).notNull(),
    sep: float({ precision: 7, scale: 2 }).notNull(),
    oct: float({ precision: 7, scale: 2 }).notNull(),
    nov: float({ precision: 7, scale: 2 }).notNull(),
    dece: float({ precision: 7, scale: 2 }).notNull(),
    jan: float({ precision: 7, scale: 2 }).notNull(),
    feb: float({ precision: 7, scale: 2 }).notNull(),
    mar: float({ precision: 7, scale: 2 }).notNull(),
    session: varchar({ length: 20 }).notNull(),
});

export const tblHostelfeereport = mysqlTable('tbl_hostelfeereport', {
    srno: int().notNull(),
    admno: varchar({ length: 20 }).notNull(),
    month: varchar({ length: 100 }).notNull(),
    monthfee: float({ precision: 7, scale: 2 }).notNull(),
    totamt: float({ precision: 7, scale: 2 }).notNull(),
    netamt: float({ precision: 7, scale: 2 }).notNull(),
    concession: float({ precision: 7, scale: 2 }).notNull(),
    payment: float({ precision: 7, scale: 2 }).notNull(),
    billdues: float({ precision: 7, scale: 2 }).notNull(),
    dues: float({ precision: 7, scale: 2 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date({ mode: 'string' }).notNull(),
    amtinword: varchar({ length: 400 }).notNull(),
});

export const tblHostelfeesetup = mysqlTable('tbl_hostelfeesetup', {
    class: varchar({ length: 10 }).notNull(),
    feetype: varchar({ length: 25 }).notNull(),
    amount: float({ precision: 7, scale: 2 }).notNull(),
});

export const tblHousemaster = mysqlTable('tbl_housemaster', {
    house: varchar({ length: 20 }).notNull(),
    colour: varchar({ length: 20 }).notNull(),
});

export const tblItem = mysqlTable('tbl_item', {
    itemname: varchar({ length: 50 }).notNull(),
    itemcategory: varchar({ length: 30 }).notNull(),
});

export const tblItembill = mysqlTable('tbl_itembill', {
    regno: varchar({ length: 30 }).notNull(),
    rcpt: int().notNull(),
    itemName: varchar('item_name', { length: 20 }).notNull(),
    itemSize: varchar('item_size', { length: 5 }).notNull(),
    quantity: int().notNull(),
    totalAmount: int('total_amount').notNull(),
    payment: int().notNull(),
    dues: int().notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    purchaseDate: date('purchase_date', { mode: 'string' }).notNull(),
});

export const tblItemdetails = mysqlTable('tbl_itemdetails', {
    itemname: varchar({ length: 30 }).notNull(),
    price: float({ precision: 9, scale: 2 }).notNull(),
});

export const tblItemmaster = mysqlTable('tbl_itemmaster', {
    itemid: varchar({ length: 30 }).notNull(),
    itemname: varchar({ length: 30 }).notNull(),
    itemcat: varchar({ length: 30 }).notNull(),
    itemsize: varchar({ length: 5 }).notNull(),
    itemprice: float({ precision: 7, scale: 2 }).notNull(),
    itemtqty: int().notNull(),
    qty: int().notNull(),
    remarks: varchar({ length: 50 }).notNull(),
});

export const tblItemreceipt = mysqlTable('tbl_itemreceipt', {
    srno: int().notNull(),
    name: varchar({ length: 100 }).notNull(),
    class: varchar({ length: 10 }).notNull(),
    admno: varchar({ length: 50 }).notNull(),
    particular: varchar({ length: 200 }).notNull(),
    quantity: int().notNull(),
    price: float({ precision: 7, scale: 2 }).notNull(),
    totamt: float({ precision: 7, scale: 2 }).notNull(),
    pament: float({ precision: 7, scale: 2 }).notNull(),
    dues: float({ precision: 7, scale: 2 }).notNull(),
    totalamt: float({ precision: 9, scale: 2 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    saledate: date({ mode: 'string' }).notNull(),
    backdues: float({ precision: 9, scale: 2 }).notNull(),
    amtinword: varchar({ length: 200 }).notNull(),
    incharge: varchar({ length: 25 }).notNull(),
    pmtmode: varchar({ length: 25 }).notNull(),
    refno: varchar({ length: 50 }).notNull(),
});

export const tblLatefinedate = mysqlTable('tbl_latefinedate', {
    lday: int().notNull(),
});

export const tblLogin = mysqlTable('tbl_login', {
    uid: varchar({ length: 30 }).notNull(),
    pwd: varchar({ length: 128 }).notNull(),
    utype: varchar({ length: 20 }).notNull(),
});

export const tblMiscfee = mysqlTable('tbl_miscfee', {
    class: varchar({ length: 5 }).notNull(),
    apr: int().notNull(),
    may: int().notNull(),
    jun: int().notNull(),
    jul: int().notNull(),
    aug: int().notNull(),
    sep: int().notNull(),
    oct: int().notNull(),
    nov: int().notNull(),
    dece: int().notNull(),
    jan: int().notNull(),
    feb: int().notNull(),
    mar: int().notNull(),
});

export const tblMonthfee = mysqlTable('tbl_monthfee', {
    admno: varchar({ length: 16 }),
    apr: float({ precision: 7, scale: 2 }),
    may: float({ precision: 7, scale: 2 }),
    jun: float({ precision: 7, scale: 2 }),
    jul: float({ precision: 7, scale: 2 }),
    aug: float({ precision: 7, scale: 2 }),
    sep: float({ precision: 7, scale: 2 }),
    oct: float({ precision: 7, scale: 2 }),
    nov: float({ precision: 7, scale: 2 }),
    dece: float({ precision: 7, scale: 2 }),
    jan: float({ precision: 7, scale: 2 }),
    feb: float({ precision: 7, scale: 2 }),
    mar: float({ precision: 7, scale: 2 }),
    billdues: float({ precision: 7, scale: 2 }),
    session: varchar({ length: 9 }),
});

export const tblMonthlyfeesetup = mysqlTable('tbl_monthlyfeesetup', {
    class: varchar({ length: 10 }).notNull(),
    tuitionfee: float({ precision: 7, scale: 2 }).notNull(),
    libraryfee: float({ precision: 7, scale: 2 }).notNull(),
    compfee: float({ precision: 7, scale: 2 }).notNull(),
    labfee: float({ precision: 7, scale: 2 }).notNull(),
    sclassfee: float({ precision: 7, scale: 2 }).notNull(),
    examfee: float({ precision: 7, scale: 2 }).notNull(),
    miscfee: float({ precision: 7, scale: 2 }).notNull(),
    fine: float({ precision: 7, scale: 2 }).notNull(),
    transfine: float({ precision: 7, scale: 2 }).notNull(),
});

export const tblPrintdaysummary = mysqlTable('tbl_printdaysummary', {
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    fdate: date({ mode: 'string' }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    todate: date({ mode: 'string' }).notNull(),
    prospectus: float({ precision: 10, scale: 2 }).notNull(),
    newadm: float({ precision: 10, scale: 2 }).notNull(),
    itemsale: float({ precision: 10, scale: 2 }).notNull(),
    readm: float({ precision: 10, scale: 2 }).notNull(),
    tuition: float({ precision: 10, scale: 2 }).notNull(),
    transport: float({ precision: 10, scale: 2 }).notNull(),
    hostel: float({ precision: 10, scale: 2 }).notNull(),
    latefee: float({ precision: 10, scale: 2 }).notNull(),
    exam: float({ precision: 10, scale: 2 }).notNull(),
    misc: float({ precision: 10, scale: 2 }).notNull(),
    backdues: float({ precision: 10, scale: 2 }).notNull(),
    total: float({ precision: 10, scale: 2 }).notNull(),
    concession: float({ precision: 10, scale: 2 }).notNull(),
    billdues: float({ precision: 10, scale: 2 }).notNull(),
    exp: float({ precision: 10, scale: 2 }).notNull(),
    netamt: float({ precision: 10, scale: 2 }).notNull(),
    bycash: float({ precision: 10, scale: 2 }).notNull(),
    amtinword: varchar({ length: 200 }).notNull(),
});

export const tblPronotes = mysqlTable('tbl_pronotes', {
    note1: varchar({ length: 100 }).notNull(),
    note2: varchar({ length: 100 }).notNull(),
    note3: varchar({ length: 100 }).notNull(),
    note4: varchar({ length: 100 }).notNull(),
});

export const tblProspectussale = mysqlTable('tbl_prospectussale', {
    rcptNo: int('rcpt_no').default(0).notNull(),
    formNo: int('form_no').default(0).notNull(),
    name: varchar({ length: 50 }).notNull(),
    phone: varchar({ length: 12 }).notNull(),
    town: varchar({ length: 50 }).notNull(),
    po: varchar({ length: 50 }).notNull(),
    ps: varchar({ length: 50 }).notNull(),
    dist: varchar({ length: 50 }).notNull(),
    pin: int().notNull(),
    totValue: int('tot_value').notNull(),
    totQty: int('tot_qty').notNull(),
    totAmount: float('tot_amount', { precision: 7, scale: 2 }).notNull(),
    qty: int().notNull(),
    classes: varchar({ length: 200 }).notNull(),
    incharge: varchar({ length: 50 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    pdate: date({ mode: 'string' }).notNull(),
    regStatus: varchar('reg_status', { length: 3 }).notNull(),
    amtinword: varchar({ length: 200 }).notNull(),
    session: varchar({ length: 10 }).notNull(),
    pmtmode: varchar({ length: 25 }).notNull(),
    refno: varchar({ length: 50 }).notNull(),
});

export const tblReadmission = mysqlTable('tbl_readmission', {
    readmsrno: int().notNull(),
    admno: varchar({ length: 30 }).notNull(),
    session: varchar({ length: 10 }).notNull(),
    feetype: varchar({ length: 30 }).notNull(),
    amount: float({ precision: 9, scale: 2 }).notNull(),
    totamount: float({ precision: 7, scale: 2 }).notNull(),
    payment: float({ precision: 7, scale: 2 }).notNull(),
    concession: float({ precision: 7, scale: 2 }).notNull(),
    netamt: float({ precision: 7, scale: 2 }).notNull(),
    advance: float({ precision: 7, scale: 2 }).notNull(),
    dues: float({ precision: 7, scale: 2 }).notNull(),
    amtinword: varchar({ length: 300 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    rdate: date({ mode: 'string' }).notNull(),
});

export const tblRegistration = mysqlTable('tbl_registration', {
    formNo: int('form_no').notNull(),
    regno: varchar({ length: 30 }).notNull(),
    sname: varchar({ length: 30 }).notNull(),
    gender: varchar({ length: 20 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dob: date({ mode: 'string' }).notNull(),
    class: varchar({ length: 20 }).notNull(),
    fname: varchar({ length: 30 }).notNull(),
    fqual: varchar({ length: 30 }).notNull(),
    foccu: varchar({ length: 30 }).notNull(),
    mname: varchar({ length: 30 }).notNull(),
    mqual: varchar({ length: 30 }).notNull(),
    moccu: varchar({ length: 30 }).notNull(),
    gname: varchar({ length: 30 }).notNull(),
    gqual: varchar({ length: 30 }).notNull(),
    goccu: varchar({ length: 30 }).notNull(),
    pTown: varchar('p_town', { length: 100 }).notNull(),
    pPo: varchar('p_po', { length: 100 }).notNull(),
    pPs: varchar('p_ps', { length: 50 }).notNull(),
    pDist: varchar('p_dist', { length: 50 }).notNull(),
    pPin: int('p_pin').notNull(),
    pState: varchar('p_state', { length: 50 }).notNull(),
    cTown: varchar('c_town', { length: 100 }).notNull(),
    cPo: varchar('c_po', { length: 100 }).notNull(),
    cPs: varchar('c_ps', { length: 50 }).notNull(),
    cDist: varchar('c_dist', { length: 100 }).notNull(),
    cPin: int('c_pin').notNull(),
    cState: varchar('c_state', { length: 50 }).notNull(),
    contact1: varchar({ length: 15 }).notNull(),
    contact2: varchar({ length: 15 }).notNull(),
    prevschool: varchar({ length: 30 }).notNull(),
    prevclass: varchar({ length: 10 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    regdate: date({ mode: 'string' }).notNull(),
    regincharge: varchar({ length: 30 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    testdate: date({ mode: 'string' }).notNull(),
    testtime: varchar({ length: 20 }).notNull(),
    status: varchar({ length: 3 }).notNull(),
    imagePath: varchar('image_path', { length: 400 }).notNull(),
    session: varchar({ length: 20 }).notNull(),
});

export const tblRegnotes = mysqlTable('tbl_regnotes', {
    note1: varchar({ length: 100 }).notNull(),
    note2: varchar({ length: 100 }).notNull(),
    note3: varchar({ length: 100 }).notNull(),
    note4: varchar({ length: 100 }).notNull(),
});

export const tblReportcard = mysqlTable('tbl_reportcard', {
    admno: varchar({ length: 25 }).notNull(),
    name: varchar({ length: 30 }).notNull(),
    class: varchar({ length: 5 }).notNull(),
    section: varchar({ length: 1 }).notNull(),
    roll: varchar({ length: 2 }).notNull(),
    dob: varchar({ length: 10 }).notNull(),
    fname: varchar({ length: 30 }).notNull(),
    fmob: varchar({ length: 10 }).notNull(),
    examname: varchar({ length: 100 }).notNull(),
    rdate: varchar({ length: 10 }).notNull(),
});

export const tblReportdemandbill = mysqlTable('tbl_reportdemandbill', {
    r1: varchar({ length: 50 }).notNull(),
    r2: varchar({ length: 50 }).notNull(),
    r3: varchar({ length: 50 }).notNull(),
    r4: varchar({ length: 50 }).notNull(),
    r5: float({ precision: 10, scale: 2 }).notNull(),
    r6: float({ precision: 10, scale: 2 }).notNull(),
    r7: float({ precision: 10, scale: 2 }).notNull(),
    r8: float({ precision: 10, scale: 2 }).notNull(),
    r9: varchar({ length: 50 }).notNull(),
    r10: float({ precision: 10, scale: 2 }).notNull(),
    r11: varchar({ length: 50 }).notNull(),
    r12: float({ precision: 10, scale: 2 }).notNull(),
    r13: varchar({ length: 50 }).notNull(),
    r14: float({ precision: 10, scale: 2 }).notNull(),
    r15: float({ precision: 10, scale: 2 }).notNull(),
    r16: float({ precision: 10, scale: 2 }).notNull(),
    r17: varchar({ length: 20 }).notNull(),
});

export const tblRfid = mysqlTable('tbl_rfid', {
    admno: varchar({ length: 25 }).notNull(),
    srfid: varchar({ length: 15 }).notNull(),
    prfid: varchar({ length: 15 }).notNull(),
});

export const tblRoute = mysqlTable('tbl_route', {
    route: varchar({ length: 50 }),
});

export const tblRoutesetup = mysqlTable('tbl_routesetup', {
    rtid: varchar({ length: 15 }).notNull(),
    vno: varchar({ length: 20 }).notNull(),
    toDes: varchar({ length: 30 }).notNull(),
    fair: float({ precision: 7, scale: 2 }).notNull(),
});

export const tblSalenotes = mysqlTable('tbl_salenotes', {
    note1: varchar({ length: 400 }).notNull(),
    note2: varchar({ length: 400 }).notNull(),
    note3: varchar({ length: 400 }).notNull(),
    note4: varchar({ length: 400 }).notNull(),
});

export const tblSchoolsetup = mysqlTable('tbl_schoolsetup', {
    regno: varchar({ length: 50 }),
    session: varchar({ length: 10 }),
    title: varchar({ length: 50 }),
    branch: varchar({ length: 50 }),
    address: text(),
    city: varchar({ length: 20 }),
    state: varchar({ length: 20 }),
    country: varchar({ length: 20 }),
    pincode: varchar({ length: 10 }),
    contact1: varchar({ length: 15 }),
    contact2: varchar({ length: 15 }),
    email: varchar({ length: 30 }),
    website: varchar({ length: 30 }),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    setupDate: date('setup_date', { mode: 'string' }).notNull(),
    shortcode: varchar({ length: 3 }).notNull(),
    punchline: varchar({ length: 200 }).notNull(),
});

export const tblSection = mysqlTable(
    'tbl_section',
    {
        section: varchar({ length: 10 }).notNull(),
    },
    (table) => [
        primaryKey({ columns: [table.section], name: 'tbl_section_section' }),
        unique('section').on(table.section),
        unique('section_2').on(table.section),
    ],
);

export const tblSecurityfeedetails = mysqlTable('tbl_securityfeedetails', {
    rcptno: varchar({ length: 10 }).notNull(),
    admno: varchar({ length: 13 }).notNull(),
    securityfee: int().notNull(),
    paidinclass: varchar({ length: 5 }).notNull(),
    paidvia: varchar({ length: 15 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    paiddate: date({ mode: 'string' }).notNull(),
    status: varchar({ length: 20 }).notNull(),
    session: varchar({ length: 9 }).notNull(),
    incharge: varchar({ length: 25 }).notNull(),
});

export const tblSecurityfeesetup = mysqlTable('tbl_securityfeesetup', {
    class: varchar({ length: 5 }).notNull(),
    fee: int().notNull(),
});

export const tblSessionclosingstatus = mysqlTable(
    'tbl_sessionclosingstatus',
    {
        sr: int().autoincrement().notNull(),
        session: varchar({ length: 10 }).notNull(),
        status: varchar({ length: 10 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        cdate: date({ mode: 'string' }).notNull(),
        incharge: varchar({ length: 30 }).notNull(),
    },
    (table) => [
        primaryKey({
            columns: [table.sr],
            name: 'tbl_sessionclosingstatus_sr',
        }),
    ],
);

export const tblSessionduedetail = mysqlTable(
    'tbl_sessionduedetail',
    {
        sr: int().autoincrement().notNull(),
        admno: varchar({ length: 20 }).notNull(),
        mmonth: varchar({ length: 100 }).notNull(),
        mamt: float({ precision: 10, scale: 2 }).notNull(),
        mfine: float({ precision: 7, scale: 2 }).notNull(),
        tmonth: varchar({ length: 100 }).notNull(),
        tamt: float({ precision: 10, scale: 2 }).notNull(),
        tfine: float({ precision: 7, scale: 2 }).notNull(),
        hmonth: varchar({ length: 100 }).notNull(),
        hamt: float({ precision: 10, scale: 2 }).notNull(),
        hfine: float({ precision: 7, scale: 2 }).notNull(),
        backdues: float({ precision: 10, scale: 2 }).notNull(),
        totamt: float({ precision: 10, scale: 2 }).notNull(),
        session: varchar({ length: 10 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        clossingdate: date({ mode: 'string' }).notNull(),
        incharge: varchar({ length: 50 }).notNull(),
    },
    (table) => [
        primaryKey({ columns: [table.sr], name: 'tbl_sessionduedetail_sr' }),
    ],
);

export const tblSessionfee = mysqlTable('tbl_sessionfee', {
    sr: int().notNull(),
    admno: varchar({ length: 20 }).notNull(),
    feetype: varchar({ length: 100 }).notNull(),
    amt: float({ precision: 10, scale: 2 }).notNull(),
    pmttype: varchar({ length: 20 }).notNull(),
    session: varchar({ length: 10 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date({ mode: 'string' }).notNull(),
    totamt: float({ precision: 10, scale: 2 }).notNull(),
    concession: float({ precision: 10, scale: 2 }).notNull(),
    netamt: float({ precision: 10, scale: 2 }).notNull(),
    payment: float({ precision: 10, scale: 2 }).notNull(),
    dues: float({ precision: 10, scale: 2 }).notNull(),
    amtinword: varchar({ length: 100 }).notNull(),
    incharge: varchar({ length: 20 }).notNull(),
    duesstatus: varchar({ length: 2 }).notNull(),
    pmtmode: varchar({ length: 25 }).notNull(),
    refno: varchar({ length: 50 }).notNull(),
});

export const tblSessionfeehostelsetup = mysqlTable(
    'tbl_sessionfeehostelsetup',
    {
        class: varchar({ length: 10 }).notNull(),
        feetype: varchar({ length: 40 }).notNull(),
        amount: float({ precision: 7, scale: 2 }).notNull(),
    },
);

export const tblSessionfeesetup = mysqlTable('tbl_sessionfeesetup', {
    class: varchar({ length: 10 }).notNull(),
    feetype: varchar({ length: 40 }).notNull(),
    amount: float({ precision: 7, scale: 2 }).notNull(),
});

export const tblSessionnotes = mysqlTable('tbl_sessionnotes', {
    note1: varchar({ length: 200 }).notNull(),
    note2: varchar({ length: 200 }).notNull(),
    note3: varchar({ length: 200 }).notNull(),
    note4: varchar({ length: 200 }).notNull(),
});

export const tblSettingstatus = mysqlTable('tbl_settingstatus', {
    frmname: varchar({ length: 50 }).notNull(),
    status: int().notNull(),
});

export const tblSmsgatewaysetting = mysqlTable('tbl_smsgatewaysetting', {
    uid: varchar({ length: 50 }).notNull(),
    pwd: varchar({ length: 50 }).notNull(),
    sid: varchar({ length: 6 }).notNull(),
    adminno: bigint({ mode: 'number' }).notNull(),
    testmob: varchar({ length: 200 }).notNull(),
});

export const tblSmstemplate = mysqlTable('tbl_smstemplate', {
    eid: varchar({ length: 50 }).notNull(),
    tid: varchar({ length: 50 }).notNull(),
    tname: varchar({ length: 50 }).notNull(),
    tsms: varchar({ length: 160 }).notNull(),
});

export const tblStdatt = mysqlTable('tbl_stdatt', {
    admno: varchar({ length: 20 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date({ mode: 'string' }).notNull(),
    status: varchar({ length: 2 }).notNull(),
    intime: time().notNull(),
    lateby: varchar({ length: 50 }).notNull(),
    outtime: time().notNull(),
    earlyby: varchar({ length: 20 }).notNull(),
});

export const tblStdattsetting = mysqlTable('tbl_stdattsetting', {
    intime: time().notNull(),
    outtime: time().notNull(),
    lunchtime: time().notNull(),
});

export const tblStdbackduesdetails = mysqlTable('tbl_stdbackduesdetails', {
    admno: varchar({ length: 15 }).notNull(),
    monthfeesr: int().notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date({ mode: 'string' }).notNull(),
    backduesdetails: varchar({ length: 200 }).notNull(),
});

export const tblStdconcessionlog = mysqlTable('tbl_stdconcessionlog', {
    admno: varchar({ length: 20 }).notNull(),
    monthfee: float({ precision: 7, scale: 2 }).notNull(),
    transportfee: float({ precision: 7, scale: 2 }).notNull(),
    hostelfee: float({ precision: 7, scale: 2 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    date: date({ mode: 'string' }).notNull(),
    concby: varchar({ length: 100 }).notNull(),
});

export const tblStddellog = mysqlTable('tbl_stddellog', {
    admno: varchar({ length: 25 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    deldate: date({ mode: 'string' }).notNull(),
    reason: varchar({ length: 200 }).notNull(),
});

export const tblStdfeemaster = mysqlTable('tbl_stdfeemaster', {
    admno: varchar({ length: 16 }),
    monthfee: int(),
    transportfee: int(),
    hostelfee: int(),
    session: varchar({ length: 9 }),
});

export const tblStdhostelfeedetail = mysqlTable(
    'tbl_stdhostelfeedetail',
    {
        sr: int().autoincrement().notNull(),
        admno: varchar({ length: 20 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        pdate: date({ mode: 'string' }).notNull(),
        hmonth: varchar({ length: 100 }).notNull(),
        hostelfee: float({ precision: 7, scale: 2 }).notNull(),
        backdues: float({ precision: 7, scale: 2 }).notNull(),
        fine: float({ precision: 7, scale: 2 }).notNull(),
        total: float({ precision: 7, scale: 2 }).notNull(),
        concession: float({ precision: 7, scale: 2 }).notNull(),
        netamt: float({ precision: 7, scale: 2 }).notNull(),
        paidamt: float({ precision: 7, scale: 2 }).notNull(),
        dues: float({ precision: 7, scale: 2 }).notNull(),
        amtinword: varchar({ length: 200 }).notNull(),
        incharge: varchar({ length: 100 }).notNull(),
    },
    (table) => [
        primaryKey({ columns: [table.sr], name: 'tbl_stdhostelfeedetail_sr' }),
    ],
);

export const tblStdidcarddata = mysqlTable('tbl_stdidcarddata', {
    admno: varchar({ length: 20 }).notNull(),
    name: varchar({ length: 50 }).notNull(),
    fname: varchar({ length: 50 }).notNull(),
    mname: varchar({ length: 50 }).notNull(),
    class: varchar({ length: 10 }).notNull(),
    sec: varchar({ length: 5 }).notNull(),
    roll: int().notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dob: date({ mode: 'string' }).notNull(),
    type: varchar({ length: 20 }).notNull(),
    bgroup: varchar({ length: 10 }).notNull(),
    route: varchar({ length: 20 }).notNull(),
    destination: varchar({ length: 30 }).notNull(),
    vill: varchar({ length: 30 }).notNull(),
    ps: varchar({ length: 30 }).notNull(),
    dist: varchar({ length: 30 }).notNull(),
    pin: int().notNull(),
    state: varchar({ length: 30 }).notNull(),
    mob: varchar({ length: 11 }).notNull(),
    photo: varchar({ length: 30 }).notNull(),
    barcode: varchar({ length: 30 }).notNull(),
    session: varchar({ length: 10 }).notNull(),
});

export const tblStdmarks = mysqlTable('tbl_stdmarks', {
    admno: varchar({ length: 20 }).notNull(),
    examtype: varchar({ length: 50 }).notNull(),
    session: varchar({ length: 20 }).notNull(),
    english: int().notNull(),
    hindi: int().notNull(),
    maths: int().notNull(),
    science: int().notNull(),
    sst: int().notNull(),
    gk: int().notNull(),
    compscience: int().notNull(),
    maxmarks: int().notNull(),
    passmarks: int().notNull(),
    tmo: int().notNull(),
    percentage: float({ precision: 3, scale: 1 }).notNull(),
    grade: varchar({ length: 2 }).notNull(),
    rank: int().notNull(),
    att: int().notNull(),
});

export const tblStdmonthfeedetail = mysqlTable(
    'tbl_stdmonthfeedetail',
    {
        sr: int().autoincrement().notNull(),
        admno: varchar({ length: 20 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        pdate: date({ mode: 'string' }).notNull(),
        tuitionfee: float({ precision: 7, scale: 2 }).notNull(),
        libraryfee: float({ precision: 7, scale: 2 }).notNull(),
        compfee: float({ precision: 7, scale: 2 }).notNull(),
        labfee: float({ precision: 7, scale: 2 }).notNull(),
        sclassfee: float({ precision: 7, scale: 2 }).notNull(),
        examfee: float({ precision: 7, scale: 2 }).notNull(),
        miscfee: float({ precision: 7, scale: 2 }).notNull(),
        sessionfee: float({ precision: 10, scale: 2 }).notNull(),
        fmonth: varchar({ length: 100 }).notNull(),
        monthfee: float({ precision: 7, scale: 2 }).notNull(),
        tmonth: varchar({ length: 100 }).notNull(),
        transfee: float({ precision: 7, scale: 2 }).notNull(),
        hmonth: varchar({ length: 100 }).notNull(),
        hostelfee: float({ precision: 7, scale: 2 }).notNull(),
        backdues: float({ precision: 7, scale: 2 }).notNull(),
        fine: float({ precision: 7, scale: 2 }).notNull(),
        tfine: float({ precision: 7, scale: 2 }).notNull(),
        hfine: float({ precision: 7, scale: 2 }).notNull(),
        total: float({ precision: 7, scale: 2 }).notNull(),
        concession: float({ precision: 7, scale: 2 }).notNull(),
        netamt: float({ precision: 7, scale: 2 }).notNull(),
        paidamt: float({ precision: 7, scale: 2 }).notNull(),
        dues: float({ precision: 7, scale: 2 }).notNull(),
        amtinword: varchar({ length: 200 }).notNull(),
        incharge: varchar({ length: 100 }).notNull(),
        pmtmode: varchar({ length: 20 }),
        pmtrefno: varchar({ length: 30 }),
    },
    (table) => [
        primaryKey({ columns: [table.sr], name: 'tbl_stdmonthfeedetail_sr' }),
    ],
);

export const tblStdscheme = mysqlTable('tbl_stdscheme', {
    admno: varchar({ length: 30 }).notNull(),
    mscheme: varchar({ length: 30 }).notNull(),
    mfee: float({ precision: 9, scale: 2 }).notNull(),
    tscheme: varchar({ length: 30 }).notNull(),
    tfee: float({ precision: 9, scale: 2 }).notNull(),
    hscheme: varchar({ length: 30 }).notNull(),
    hfee: float({ precision: 9, scale: 2 }).notNull(),
    session: varchar({ length: 20 }).notNull(),
});

export const tblStdtransdetail = mysqlTable('tbl_stdtransdetail', {
    admno: varchar({ length: 20 }).notNull(),
    route: varchar({ length: 50 }).notNull(),
    destination: varchar({ length: 50 }).notNull(),
});

export const tblStockinventorylog = mysqlTable('tbl_stockinventorylog', {
    itemcategory: varchar({ length: 30 }).notNull(),
    itemname: varchar({ length: 30 }).notNull(),
    itemsize: varchar({ length: 20 }).notNull(),
    oldQty: int('old_qty').notNull(),
    updatedQty: int('updated_qty').notNull(),
    newQty: int('new_qty').notNull(),
    action: varchar({ length: 20 }).notNull(),
    dou: datetime({ mode: 'string' }).notNull(),
});

export const tblStocksetup = mysqlTable('tbl_stocksetup', {
    itemId: int('item_id').notNull(),
    itemName: varchar('item_name', { length: 50 }).notNull(),
    itemSize: varchar('item_size', { length: 50 }).notNull(),
    itemPrice: float('item_price', { precision: 7, scale: 2 }).notNull(),
    itemCount: int('item_count').notNull(),
    itemStatus: varchar('item_status', { length: 20 }),
    thresholdQuantity: int('threshold_quantity').notNull(),
});

export const tblStuconv = mysqlTable('tbl_stuconv', {
    regno: varchar({ length: 20 }).notNull(),
    routeid: varchar({ length: 10 }).notNull(),
});

export const tblStudentreport = mysqlTable('tbl_studentreport', {
    admno: varchar({ length: 20 }).notNull(),
    name: varchar({ length: 100 }).notNull(),
    class: varchar({ length: 100 }).notNull(),
    sec: varchar({ length: 100 }).notNull(),
    roll: varchar({ length: 100 }).notNull(),
    gender: varchar({ length: 100 }).notNull(),
    fname: varchar({ length: 100 }).notNull(),
    address: varchar({ length: 200 }).notNull(),
    mobile: varchar({ length: 10 }).notNull(),
    date: varchar({ length: 20 }).notNull(),
    r1: varchar({ length: 10 }).notNull(),
});

export const tblSwitches = mysqlTable('tbl_switches', {
    switch: varchar({ length: 50 }).notNull(),
    status: int().notNull(),
});

export const tblTablereport = mysqlTable('tbl_tablereport', {
    sl: int().notNull(),
    r1: varchar({ length: 100 }).notNull(),
    r2: varchar({ length: 100 }).notNull(),
    r3: varchar({ length: 100 }).notNull(),
    r4: varchar({ length: 100 }).notNull(),
    r5: varchar({ length: 100 }).notNull(),
    r6: varchar({ length: 100 }).notNull(),
    r7: varchar({ length: 100 }).notNull(),
    r8: varchar({ length: 100 }).notNull(),
    r9: varchar({ length: 100 }).notNull(),
    r10: varchar({ length: 100 }).notNull(),
    r11: varchar({ length: 100 }).notNull(),
    r12: varchar({ length: 100 }).notNull(),
    r13: varchar({ length: 100 }).notNull(),
    r14: varchar({ length: 100 }).notNull(),
    r15: varchar({ length: 100 }).notNull(),
    r16: varchar({ length: 100 }).notNull(),
    r17: varchar({ length: 100 }).notNull(),
    r18: varchar({ length: 100 }).notNull(),
    r19: varchar({ length: 100 }).notNull(),
    r20: varchar({ length: 100 }).notNull(),
    r21: varchar({ length: 100 }).notNull(),
    r22: varchar({ length: 100 }).notNull(),
    r23: varchar({ length: 100 }).notNull(),
    r24: varchar({ length: 100 }).notNull(),
    r25: varchar({ length: 100 }).notNull(),
    r26: varchar({ length: 100 }).notNull(),
    r27: varchar({ length: 100 }).notNull(),
    r28: varchar({ length: 100 }).notNull(),
    r30: varchar({ length: 100 }).notNull(),
    r31: varchar({ length: 100 }).notNull(),
    r32: varchar({ length: 100 }).notNull(),
    r33: varchar({ length: 100 }).notNull(),
    r34: varchar({ length: 100 }).notNull(),
    r35: varchar({ length: 100 }).notNull(),
    // Warning: Can't parse longblob from database
    // longblobType: longblob("r36").notNull(),
});

export const tblTc = mysqlTable('tbl_tc', {
    tcno: varchar({ length: 20 }).notNull(),
    admno: varchar({ length: 20 }).notNull(),
    sname: varchar({ length: 50 }).notNull(),
    fname: varchar({ length: 50 }).notNull(),
    mname: varchar({ length: 50 }).notNull(),
    nationality: varchar({ length: 20 }).notNull(),
    scst: varchar({ length: 20 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dofa: date({ mode: 'string' }).notNull(),
    dofaclass: varchar({ length: 10 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    dob: date({ mode: 'string' }).notNull(),
    dobinwords: varchar({ length: 100 }).notNull(),
    lastclass: varchar({ length: 10 }).notNull(),
    lastclassinwords: varchar({ length: 10 }).notNull(),
    lastschbrd: varchar({ length: 50 }).notNull(),
    failed: varchar({ length: 10 }).notNull(),
    subjectstudied: varchar({ length: 100 }).notNull(),
    qualiforpromo: varchar({ length: 10 }).notNull(),
    promoclass: varchar({ length: 10 }).notNull(),
    promoclassinwords: varchar({ length: 25 }).notNull(),
    monthuptopaid: varchar({ length: 10 }).notNull(),
    feeconcession: varchar({ length: 10 }).notNull(),
    totworkdays: int().notNull(),
    totworkdayspresent: int().notNull(),
    ncc: varchar({ length: 20 }).notNull(),
    games: varchar({ length: 30 }).notNull(),
    genconduct: varchar({ length: 20 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    doacerti: date({ mode: 'string' }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    doicerti: date({ mode: 'string' }).notNull(),
    reason: varchar({ length: 50 }).notNull(),
    remarks: varchar({ length: 70 }).notNull(),
    prepby: varchar({ length: 50 }).notNull(),
    checkby: varchar({ length: 50 }).notNull(),
    barcodepath: varchar({ length: 300 }).notNull(),
});

export const tblTestdate = mysqlTable('tbl_testdate', {
    etid: int().notNull(),
    class: varchar({ length: 30 }).notNull(),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    testdate: date({ mode: 'string' }).notNull(),
    testtime: varchar({ length: 15 }).notNull(),
    subject: varchar({ length: 100 }).notNull(),
    venue: varchar({ length: 100 }).notNull(),
    status: varchar({ length: 10 }).notNull(),
});

export const tblTranscompsetup = mysqlTable('tbl_transcompsetup', {
    compname: varchar({ length: 100 }),
    owner: varchar({ length: 100 }),
    address: varchar({ length: 200 }),
    contact1: varchar({ length: 12 }),
    contact2: varchar({ length: 12 }),
    email: varchar({ length: 100 }),
    website: varchar({ length: 100 }),
    // you can use { mode: 'date' }, if you want to have Date as type for this column
    setupDate: date('setup_date', { mode: 'string' }),
});

export const tblTransportfee = mysqlTable('tbl_transportfee', {
    admno: varchar({ length: 16 }),
    apr: float({ precision: 7, scale: 2 }),
    may: float({ precision: 7, scale: 2 }),
    jun: float({ precision: 7, scale: 2 }),
    jul: float({ precision: 7, scale: 2 }),
    aug: float({ precision: 7, scale: 2 }),
    sep: float({ precision: 7, scale: 2 }),
    oct: float({ precision: 7, scale: 2 }),
    nov: float({ precision: 7, scale: 2 }),
    dece: float({ precision: 7, scale: 2 }),
    jan: float({ precision: 7, scale: 2 }),
    feb: float({ precision: 7, scale: 2 }),
    mar: float({ precision: 7, scale: 2 }),
    session: varchar({ length: 9 }),
});

export const tblUserlog = mysqlTable(
    'tbl_userlog',
    {
        sr: int().notNull(),
        uid: varchar({ length: 30 }).notNull(),
        // you can use { mode: 'date' }, if you want to have Date as type for this column
        date: date({ mode: 'string' }).notNull(),
        logintime: varchar({ length: 10 }).notNull(),
        logouttime: varchar({ length: 10 }).notNull(),
        duration: varchar({ length: 20 }).notNull(),
    },
    (table) => [primaryKey({ columns: [table.sr], name: 'tbl_userlog_sr' })],
);

export const tblUserroles = mysqlTable('tbl_userroles', {
    user: varchar({ length: 40 }).notNull(),
    menuname: varchar({ length: 100 }).notNull(),
});

export const tblVehiclesetup = mysqlTable('tbl_vehiclesetup', {
    vid: int().notNull(),
    vno: varchar({ length: 20 }).notNull(),
    vtitle: varchar({ length: 30 }).notNull(),
    vdriver: varchar({ length: 30 }).notNull(),
    vconductor: varchar({ length: 30 }).notNull(),
    mob: varchar({ length: 11 }).notNull(),
});
