const articles = [
  {
    title: 'How Much Does NSFAS Give Per Month',
    excerpt: 'Understanding Your NSFAS Monthly Allowance',
    category: 'NSFAS',
    date: 'Nov 15, 2024',
    readTime: '3 min',
    deadline: 'Closes: Dec 15, 2024'
  },
  {
    title: 'How Long Does NSFAS Take to Approve',
    excerpt: 'Understanding the Timeline and Process',
    category: 'NSFAS',
    date: 'Nov 16, 2024',
    readTime: '4 min',
    deadline: 'Closes: Dec 15, 2024'
  },
  {
    title: 'NSFAS 2025 Applications Now Open',
    excerpt: 'Step-by-step guide on how to apply for NSFAS funding for the 2025 academic year.',
    category: 'NSFAS',
    date: 'Nov 17, 2024',
    readTime: '4 min',
    urgent: true,
    deadline: 'Closes: Dec 15, 2024'
  },
  {
    title: 'What does verification mean NSFAS status',
    excerpt: 'Understanding Your Options and Improving Your Chances',
    category: 'NSFAS',
    date: 'Nov 18, 2024',
    readTime: '5 min',
    deadline: 'Closes: Dec 15, 2024'
  },
  {
  title: 'Can I reapply for NSFAS after rejection',
  excerpt: 'Understanding Your Options and Improving Your Chances',
  category: 'NSFAS',
  date: 'Nov 18, 2024',
  readTime: '4 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'How to Appeal NSFAS Rejection',
  excerpt: 'A Comprehensive Guide for Students',
  category: 'NSFAS',
  date: 'Nov 19, 2024',
  readTime: '3 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'Is NSFAS Still Open',
  excerpt: 'Application Status and Important Dates for 2025',
  category: 'NSFAS',
  date: 'Nov 20, 2024',
  readTime: '2 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'NSFAS Requirements for 2025',
  excerpt: 'Your Guide to Student Financial Aid in South Africa',
  category: 'NSFAS',
  date: 'Nov 21, 2024',
  readTime: '5 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'Why was my NSFAS application rejected',
  excerpt: 'Understanding the Reasons and Next Steps',
  category: 'NSFAS',
  date: 'Nov 22, 2024',
  readTime: '3 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'Top 10 Budgeting Tips for NSFAS Students',
  excerpt: 'Master Your Finances and Make the Most of Your Allowance',
  category: 'NSFAS',
  date: 'Nov 23, 2024',
  readTime: '3 min',
  deadline: 'Closes: Dec 15, 2024'
},


{
  title: 'How to Check Your NSFAS Application Status',
  excerpt: 'A Step-by-Step Guide for Applicants',
  category: 'NSFAS',
  date: 'Nov 24, 2024',
  readTime: '3 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'NSFAS Alternatives',
  excerpt: 'Funding Options for South African Students',
  category: 'NSFAS',
  date: 'Nov 25, 2024',
  readTime: '4 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'What Does NSFAS Cover',
  excerpt: 'A Comprehensive Guide for Students',
  category: 'NSFAS',
  date: 'Nov 26, 2024',
  readTime: '5 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'How to Submit Missing NSFAS Documents',
  excerpt: 'A Complete Guide for Applicants',
  category: 'NSFAS',
  date: 'Nov 27, 2024',
  readTime: '6 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'NSFAS Status Provisionally Funded',
  excerpt: 'Understanding What It Means for Your Education',
  category: 'NSFAS',
  date: 'Nov 28, 2024',
  readTime: '3 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'Forgot NSFAS Username or Password',
  excerpt: 'Step-by-Step Recovery Guide',
  category: 'NSFAS',
  date: 'Nov 29, 2024',
  readTime: '4 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'Do I have to repay NSFAS',
  excerpt: 'Understanding NSFAS Funding and Repayment',
  category: 'NSFAS',
  date: 'Dec 15, 2024',
  readTime: '1 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'Does NSFAS fund postgraduate studies',
  excerpt: 'Exploring Your Options for Postgraduate Funding',
  category: 'NSFAS',
  date: 'Nov 15, 2024',
  readTime: '3 min',
  deadline: 'Closes: Dec 15, 2024'
},
{
  title: 'Does NSFAS Pay for Honours Degree',
  excerpt: 'Everything You Need to Know About NSFAS Funding for Postgraduate Studies',
  category: 'NSFAS',
  date: 'Nov 15, 2024',
  readTime: '5 min',
  deadline: 'Closes: Dec 15, 2024'
},



  //---------------------------------------------------------------------------------------
  {
    title: 'When Will I Hear Back from University After Applying',
    excerpt: 'Response times in the admissions process',
    category: 'University',
    date: 'Nov 01, 2024',
    readTime: '3 min',
    deadline: 'Applications close: Sept 30, 2024'
  },
  {
    title: 'Late Applications for University 2025',
    excerpt: 'Missed the deadline? Don\'t panic! These are last-minute opportunities for 2025 university admissions in South Africa. Learn about top institutions still accepting students.',
    category: 'University',
    date: 'Nov 02, 2024',
    readTime: '4 min',
    deadline: 'Applications close: Sept 30, 2024'
},
  {
      title: 'When Do Universities Close for Applications',
      excerpt: 'A Comprehensive Guide to University Application Deadlines in South Africa',
      category: 'University',
      date: 'Nov 03, 2024',
      readTime: '5 min',
      deadline: 'Applications close: Sept 30, 2024'
  },
  
{
  title: 'Can I Apply to University with My June Results',
  excerpt: 'How to use your Grade 11 final or Grade 12 June results for early university applications in South Africa.',
  category: 'University',
  date: 'Nov 04, 2024',
  readTime: '4 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
  title: 'Strategies to Improve Your Grades Between June and Final Matric Exams',
  excerpt: 'Effective techniques to boost your academic performance in the crucial months leading up to your final exams.',
  category: 'University',
  date: 'Nov 05, 2024',
  readTime: '3 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
  title: 'Do I need a certified copy of my ID for university',
  excerpt: 'Document requirements for university applications',
  category: 'University',
  date: 'Nov 06, 2024',
  readTime: '4 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
  title: 'Universities that offer law in South Africa',
  excerpt: 'Law degree options across South African universities',
  category: 'University',
  date: 'Nov 07, 2024',
  readTime: '2 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
  title: 'Best Universities for Engineering in South Africa',
  excerpt: 'A guide to top education programs',
  category: 'University',
  date: 'Nov 08, 2024',
  readTime: '2 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
  title: 'Best Universities for Teaching',
  excerpt: 'Everything you need to know about applying to South African universities.',
  category: 'University',
  date: 'Nov 09, 2024',
  readTime: '2 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
  title: 'How to Check My University Application Status',
  excerpt: 'Everything you need to know about applying to South African universities.',
  category: 'University',
  date: 'Nov 10, 2024',
  readTime: '4 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
  title: 'Why is My University Application Still Pending',
  excerpt: 'The admissions process and wait times',
  category: 'University',
  date: 'Nov 11, 2024',
  readTime: '3 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
  title: 'What to Do If My University Application Is Rejected',
  excerpt: 'Moving forward after a setback in your academic journey',
  category: 'University',
  date: 'Nov 12, 2024',
  readTime: '4 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
  title: 'Universities Accepting Late Applications 2025',
  excerpt: 'Your Second Chance for Higher Education',
  category: 'University',
  date: 'Nov 13, 2024',
  readTime: '3 min',
  deadline: 'Applications close: Sept 30, 2024'
},

{
  title: 'Can I Reapply to University if I\'m Rejected',
  excerpt: 'Everything you need to know about applying to South African universities.',
  category: 'University',
  date: 'Nov 14, 2024',
  readTime: '4 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
  title: 'How to Apply to TVET Colleges',
  excerpt: 'A guide for prospective students',
  category: 'University',
  date: 'Nov 15, 2024',
  readTime: '3 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
  title: 'What does provisionally accepted mean',
  excerpt: 'Understanding Provisional Acceptance to South African Universities',
  category: 'University',
  date: 'Nov 16, 2024',
  readTime: '5 min',
  deadline: 'Applications close: Sept 30, 2024'
},
{
    title: 'Do I need to write an NBT for university',
    excerpt: 'Understanding the National Benchmark Test for South African Universities',
    category: 'University',
    date: 'Nov 17, 2024',
    readTime: '4 min',
    deadline: 'Applications close: Sept 30, 2024'
  },

  //---------------------------------------------------------------------------------------
  {
      title: 'Funza Lushaka Bursary Application Closing Date 2025',
      excerpt: 'Essential Information for Aspiring Teachers in South Africa',
      category: 'FUNZA',
      date: 'Dec 01, 2024',
      readTime: '5 min',
      deadline: 'Next intake: Jan 2025'
  },

  {
    title: 'How to apply for Funza Lushaka bursary 2024',
    excerpt: 'A Comprehensive Guide to Securing Your Education Funding',
    category: 'FUNZA',
    date: 'Dec 16, 2024',
    readTime: '5 min',
    deadline: 'Next intake: Jan 2025'
  },
  {
    title: 'Funza Lushaka Online Application',
    excerpt: 'Your Step-by-Step Guide to Applying for the Funza Lushaka Bursary',
    category: 'FUNZA',
    date: 'Dec 02, 2024',
    readTime: '2 min',
    deadline: 'Next intake: Jan 2025'
},
{
  title: 'When Does Funza Lushaka Bursary Open for Applications',
  excerpt: 'Key Dates and Information for Aspiring Teachers in South Africa',
  category: 'FUNZA',
  date: 'Dec 03, 2024',
  readTime: '1 min',
  deadline: 'Next intake: Jan 2025'
},
{
  title: 'Funza Lushaka Monthly Allowance',
  excerpt: 'Understanding the Financial Support for Future Educators',
  category: 'FUNZA',
  date: 'Dec 04, 2024',
  readTime: '3 min',
  deadline: 'Next intake: Jan 2025'
},
{
  title: 'How long do I have to teach after Funza Lushaka bursary',
  excerpt: 'Understanding Your Teaching Obligations as a Funza Lushaka Bursary Recipient',
  category: 'FUNZA',
  date: 'Dec 05, 2024',
  readTime: '4 min',
  deadline: 'Next intake: Jan 2025'
},
{
  title: 'How much does Funza Lushaka pay for students',
  excerpt: 'Understanding the Funza Lushaka Bursary Program for Aspiring Teachers',
  category: 'FUNZA',
  date: 'Dec 06, 2024',
  readTime: '4 min',
  deadline: 'Next intake: Jan 2025'
},
{
  title: 'How to Check Your Funza Lushaka Bursary Status',
  excerpt: 'A Comprehensive Guide for South African Student Teachers',
  category: 'FUNZA',
  date: 'Dec 07, 2024',
  readTime: '8 min',
  deadline: 'Next intake: Jan 2025'
},
{
  title: 'Funza Lushaka Monthly Allowance',
  excerpt: 'Check if you qualify for the FUNZA Lushaka teaching bursary program.',
  category: 'FUNZA',
  date: 'Dec 08, 2024',
  readTime: '4 min',
  deadline: 'Next intake: Jan 2025'
},
{
  title: 'How long do I have to teach after Funza Lushaka bursary',
  excerpt: 'Check if you qualify for the FUNZA Lushaka teaching bursary program.',
  category: 'FUNZA',
  date: 'Dec 09, 2024',
  readTime: '5 min',
  deadline: 'Next intake: Jan 2025'
},
{
  title: 'How much does Funza Lushaka pay for students',
  excerpt: 'Check if you qualify for the FUNZA Lushaka teaching bursary program.',
  category: 'FUNZA',
  date: 'Dec 10, 2024',
  readTime: '4 min',
  deadline: 'Next intake: Jan 2025'
},
{
  title: 'How to Check Your Funza Lushaka Bursary Status',
  excerpt: 'Check if you qualify for the FUNZA Lushaka teaching bursary program.',
  category: 'FUNZA',
  date: 'Dec 11, 2024',
  readTime: '3 min',
  deadline: 'Next intake: Jan 2025'
},
{
  title: 'What happens if I don\'t want to teach after Funza Lushaka',
  excerpt: 'Check if you qualify for the FUNZA Lushaka teaching bursary program.',
  category: 'FUNZA',
  date: 'Dec 12, 2024',
  readTime: '4 min',
  deadline: 'Next intake: Jan 2025'
},
{
  title: 'Can I choose where to teach with Funza Lushaka',
  excerpt: 'Understanding Your Teaching Placement Options with the Funza Lushaka Bursary',
  category: 'FUNZA',
  date: 'Dec 13, 2024',
  readTime: '3 min',
  deadline: 'Next intake: Jan 2025'
},

{
  title: 'How long does Funza Lushaka take to approve applications',
  excerpt: 'Understanding the Timeline for Funza Lushaka Bursary Approvals',
  category: 'FUNZA',
  date: 'Dec 14, 2024',
  readTime: '2 min',
  deadline: 'Next intake: Jan 2025'
},

{
  title: 'What happens if I don\'t want to teach after Funza Lushaka',
  excerpt: 'Understanding the Consequences of Not Fulfilling Your Bursary Obligations',
  category: 'FUNZA',
  date: 'Dec 15, 2024',
  readTime: '4 min',
  deadline: 'Next intake: Jan 2025'
},
{
  title: 'How to Appeal Funza Lushaka Rejection',
  excerpt: 'A Step-by-Step Guide for Applicants',
  category: 'FUNZA',
  date: 'Dec 15, 2024',
  readTime: '5 min',
  deadline: 'Next intake: Jan 2025'
},

{
  title: 'What Does \'Provisionally Accepted\' Mean for Funza Lushaka',
  excerpt: 'Understanding Your Bursary Application Status',
  category: 'FUNZA',
  date: 'Dec 16, 2024',
  readTime: '3 min',
  deadline: 'Next intake: Jan 2025'
}

];