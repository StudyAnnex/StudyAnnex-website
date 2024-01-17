const books = [{
    subject: 'Accounting',
    title: 'Accounting grade 12 from UJ, NMU, DUT',
    image:'https://i.ibb.co/0nccJFS/grade-12-accounting-study-guide-from-nmu-dut-uj-cover.png',
    downloadLink:'https://www.proverto.co.za/documents/StudyGuides/pdf/2023_Accounting.pdf'
  },
  {
    subject: 'Accounting',
    title: 'Mind the Gap Study Guide for Accounting',
    image:'https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/5d7bf454e3bc6ef1c0dcc4842cb0e0c7/thumb_1200_1697.png',
    downloadLink:'https://www.education.gov.za/Portals/0/Documents/Manuals/1b%20MTG%20Accounting%20EN%2018%20Sept%202014.pdf?ver=2014-09-18-144344-000'
  },
  {
    subject: 'Accounting',
    title: 'Accounting Grade 12 mtg',
    image:'https://s2.studylib.net/store/data/026138366_1-3d6e596619dc0053ff3ba665d0ee41ad.png',
    downloadLink:'https://drive.google.com/file/d/1boXRkkeqCa2RYM_HT9y3xvkH4H2J86uB/view'
  },
  {
    subject: 'Agricultural Sciences',
    title: 'Agricultural Sciences via afrika',
    image:'https://viaafrika.com/wp-content/uploads/2015/07/Agricultural-Sciences-12-LB-E.jpg',
    downloadLink:'https://viaafrika.com/wp-content/uploads/2020/06/Gr12-Agricultural-Science-Study-Guide_LR.pdf'
  },
  {
    subject: 'Business Studies',
    title: 'Business Studies Grade 12',
    image:'https://viaafrika.com/wp-content/uploads/2015/07/Agricultural-Sciences-12-LB-E.jpg',
    downloadLink:'https://viaafrika.com/wp-content/uploads/2020/06/Gr12-Business-Studies-Study-Guide_LR.pdf'
  },
  {
    subject: 'Computer Application Technology',
    title: 'CAT Grade 12',
    image:'https://img2.snapplify.com/343efa51f2e35d8fda7375e7c95e686c/viaafrikadistrib/9781415463055.jpg?h=340&w=',
    downloadLink:'https://viaafrika.com/wp-content/uploads/2020/06/Gr12-CAT-TG-SG_LR.pdf'
  },
  {
    subject: 'Computer Application Technology',
    title: 'CAT Grade 12',
    image:'https://www.siyavula.com/static/common/files/books/cat-gr12.jpg',
    downloadLink:'https://www.siyavula.com/book-downloads/cat/CAT_theory_book_grade12.epub'
  },
  {
    subject: 'Economics',
    title: 'Economics Grade 12',
    image:'https://ebooks.textbookcentre.com/media/products/snapplify/978141/9781415463086.jpg',
    downloadLink:'https://viaafrika.com/wp-content/uploads/2020/06/Gr12-Economics-studyguide_LR.pdf'
  },
  {
    subject: 'Economics',
    title: 'Economics Grade 12 mtg',
    image:'https://wcedeportal.co.za/sites/eresources/files/MTG%20gr%2012%20ECON_0.png',
    downloadLink:'https://www.education.gov.za/LinkClick.aspx?fileticket=G2QQxMIx60Q%3d&tabid=670&portalid=0&mid=2498&forcedownload=true'
  },
  {
    subject: 'Geography',
    title: 'Geography Grade 12',
    image:'https://img2.snapplify.com/fcec8328733ebd2cd4b0c67bcf84a4c6/viaafrikadistrib/9781775638520.jpg?h=340&w=',
    downloadLink:'https://viaafrika.com/wp-content/uploads/2020/06/Gr12-Geography-Study-Guide_LR.pdf'
  },
  {
    subject: 'Geography',
    title: 'Geography Grade 12 mtg',
    image:'https://wcedeportal.co.za/sites/eresources/files/MTG%20gr%2012%20GEOGR%20E.png',
    downloadLink:'https://www.education.gov.za/LinkClick.aspx?fileticket=tqrti0dMRJQ%3d&tabid=670&portalid=0&mid=2498&forcedownload=true'
  },
  {
    subject: 'History',
    title: 'History Grade 12',
    image:'https://img2.snapplify.com/1ac909569e1bc05dfd1d4467f4b7b704/viaafrikadistrib/9781415463253.jpg?h=340&w=',
    downloadLink:'https://viaafrika.com/wp-content/uploads/2020/06/Gr12-History-Study-Guide_LR.pdf'
  },
  {
    subject: 'Information Technology',
    title: 'IT Grade 12',
    image:'https://www.siyavula.com/static/common/files/books/it-gr11.jpg',
    downloadLink:'https://www.siyavula.com/book-downloads/it/IT_theory_book_grade12.epub'
  },
  {
    subject: 'Life Sciences',
    title: 'Life Sciences Grade 12',
    image:'https://i.ibb.co/GkT45Bc/grade-12-life-sciences-study-guide-nmu-cover.png',
    downloadLink:'https://brettonwoodhighschool.co.za/wp-content/uploads/2020/04/Life-Sciences-Grade-12-Textbook-1.pdf'
  },
  {
    subject: 'Life Sciences',
    title: 'Life Sciences Grade 12',
    image:'https://viaafrika.com/wp-content/uploads/2015/07/Life-Sciences-12-LB-E.jpg',
    downloadLink:'https://viaafrika.com/wp-content/uploads/2020/06/Gr12-Life-Sciences-TG-Study-Guide_LR.pdf'
  },
  {
    subject: 'Life Sciences',
    title: 'Life Sciences Grade 12',
    image:'https://wcedeportal.co.za/sites/eresources/files/MTG%20gr%2012%20LIFE%20SC.png',
    downloadLink:'https://www.education.gov.za/LinkClick.aspx?fileticket=uxQWvGa-ZA0%3d&tabid=670&portalid=0&mid=2498&forcedownload=true'
  },
  {
    subject: 'Life Sciences',
    title: 'Life Sciences Grade 12 mtg',
    image:'https://i.ibb.co/hMDCgLF/life-sciences.png',
    downloadLink:'https://publications.virtualpaper.com/uploads/24082e47aee483cc634805ae47155df0/f90e3821107a9d9e628a99cb2c606e40/pdf/2017lifescience.pdf'
  },
  {
    subject: 'Mathematical Literacy',
    title: 'Mathematics Literacy Grade 12',
    image:'https://ebooks.textbookcentre.com/media/products/snapplify/978141/9781415463352.jpg',
    downloadLink:'https://viaafrika.com/wp-content/uploads/2020/06/Gr12-Mathematical-Literacy-Study-Guide_LR.pdf'
  },
  {
    subject: 'Mathematical Literacy',
    title: 'Mathematics Literacy Grade 12 mtg',
    image:'https://wcedeportal.co.za/sites/eresources/files/MTG%20gr%2012%20MATHS%20LIT.png',
    downloadLink:'https://www.education.gov.za/LinkClick.aspx?fileticket=c685LnK9Eiw%3d&tabid=670&portalid=0&mid=2498&forcedownload=true'
  },
  {
    subject: 'Mathematics',
    title: 'Mathematics Grade 12',
    image:'https://cdn.24.co.za/files/Cms/General/d/662/7a1a396344ec4826965cbe263dc9af5a.jpg',
    downloadLink:'https://viaafrika.com/wp-content/uploads/2020/06/Gr12-Mathematics-Study-Guide_LR.pdf'
  },
  {
    subject: 'Mathematics',
    title: 'Mathematics Grade 12 mtg',
    image:'https://wcedeportal.co.za/sites/eresources/files/MTG%20gr%2012%20MATHS.png',
    downloadLink:'https://www.education.gov.za/LinkClick.aspx?fileticket=qcrl4lQ-Q5w%3d&tabid=670&portalid=0&mid=2498&forcedownload=true'
  },
  {
    subject: 'Mathematics',
    title: 'Mathematics Grade 12',
    image:'https://i.ibb.co/BP7TwRX/grade-12-maths-study-guide-from-nmu-dut-uj-cover.png',
    downloadLink:'https://www.proverto.co.za/documents/StudyGuides/pdf/2023_Maths.pdf'
  },
  {
    subject: 'Mathematics',
    title: 'Mathematics Grade 12 Siyavula',
    image:'https://sp-uploads.s3.amazonaws.com/uploads/services/4511988/20220802085415_62e8e6377afc7_everything_maths_grade_12_siyavula__siyavula___z_lib.org_page0.jpg',
    downloadLink:'https://www.siyavula.com/book-downloads/maths/Gr12_Mathematics_Learner_Eng.pdf'
  },
  {
    subject: 'Physical Science',
    title: 'Physics Grade 12 mtg',
    image:'https://wcedeportal.co.za/sites/eresources/files/MTG%20gr%2012%20PH%20SC.png',
    downloadLink:'https://www.education.gov.za/LinkClick.aspx?fileticket=s_OwwNPBaCU%3d&tabid=670&portalid=0&mid=2498&forcedownload=true'
  },
  {
    subject: 'Physical Science',
    title: 'Chemistry Grade 12 mtg',
    image:'https://wcedeportal.co.za/sites/eresources/files/MTG%20gr%2012%20CHEM.png',
    downloadLink:'https://www.education.gov.za/LinkClick.aspx?fileticket=iNSFEv2mwgg%3d&tabid=670&portalid=0&mid=2498&forcedownload=true'
  },
  {
    subject: 'Physical Science',
    title: 'Physical Science Grade 12',
    image:'https://i.ibb.co/3NyfNry/physical-sciences.png',
    downloadLink:'https://publications.virtualpaper.com/uploads/24082e47aee483cc634805ae47155df0/78c86f0f034e2eb44a1909bf58a648d0/pdf/2017physicalscience.pdf'
  },
  {
    subject: 'Physical Science',
    title: 'Physical Science Grade 12',
    image:'https://www.siyavula.com/static/common/files/books/science-12.jpg',
    downloadLink:'https://www.siyavula.com/book-downloads/science/Gr12_PhysicalSciences_Learner_Eng.pdf'
  },
  {
    subject: 'Tourism',
    title: 'Tourism Grade 12',
    image:'https://i.ibb.co/jH8vfsm/tourism.png',
    downloadLink:'https://publications.virtualpaper.com/uploads/24082e47aee483cc634805ae47155df0/d4daddd7541c2561a327401ca108dede/pdf/2017tourism.pdf'
  },
  {
    subject: 'Tourism',
    title: 'Tourism Grade 12',
    image:'https://viaafrika.com/wp-content/uploads/2015/07/Tourism-12-LB-E.jpg',
    downloadLink:'https://viaafrika.com/wp-content/uploads/2020/06/Gr12-Tourism-Study-Guide_LR.pdf'
  }
];

export default books;