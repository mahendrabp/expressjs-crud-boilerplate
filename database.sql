-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 29, 2019 at 08:08 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express-boilerplat`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `category`) VALUES
(1, 'IT-Perangkat Lunak'),
(2, 'IT-Perangkat Keras'),
(3, 'IT-Jaringan/Sistem'),
(4, 'Digital Marketing'),
(6, 'Manajemen'),
(9, 'Arsitektur');

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `logo` varchar(500) DEFAULT NULL,
  `location` varchar(500) DEFAULT NULL,
  `description` text CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `name`, `logo`, `location`, `description`) VALUES
(1, 'Tokopedia', 'tokopedia.png', 'Jakarta', 'Marketplace dengan Pilihan Produk Paling Beragam\r\nMarketplace kami menyediakan pilihan produk paling beragam di Indonesia. Kami telah bekerjasama dengan lebih dari 6,4 juta penjual, berbagai toko resmi dan mitra logistik serta pembayaran untuk memberikan pengalaman terbaik bagi pelanggan kami.'),
(2, 'Bukalapak', 'logo_salah_10.png', 'Jakarta', 'Tentang Bukalapak\r\n\r\nBukalapak merupakan salah satu online marketplace terkemuka di Indonesia yang menyediakan sarana jual-beli dari konsumen ke konsumen. Semua orang dapat membuka toko online di Bukalapak dan melayani pembeli dari seluruh Indonesia untuk transaksi satuan maupun banyak.\r\n'),
(6, 'Mamikos.com', 'mamikos.png', 'Yogyakarta', 'MAMIKOS.com is a no.1 Kost/Room-rental finder for longer-term application in Indonesia. MAMIKOS as a platform has served 7 million anak kost user all across Indonesia and over 100,000 kost-kostan. Beyond kost-rental finder, MAMIKOS providing a standardized room option to support better living especially for student and worker accommodations. We are looking for talented, energetic and dynamic members for our super team together to upgrade the living quality of anak kost all over Indonesia! Why join us?  Kami menawarkan peluang kerja dan kesempatan berkarir yang sama untuk semua level jabatan, suasana kerja yang kondusif dan transparan, serta target kerja yang membuat Anda bisa memberikan kemampuan maksimal bagi perkembangan perusahaan. Kami juga memberikan kesempatan bagi setiap karyawan untuk meningkatkan kapasitas pribadinya sehingga mampu menjadi pengelola dan pemilik dari sebuah unit usaha secara mandiri.'),
(8, 'Ruangguru', 'f70b525185230a50b4129fbdc0821ee4.jpg', 'Jakarta', 'Ruangguru is an online matchmaking platform for students and private tutors.\r\n\r\nRuangguru adalah perusahaan penyedia layanan dan konten pendidikan berbasis teknologi terkemuka di Indonesia.\r\n\r\nRuangguru adalah perusahaan penyedia laya nan dan konten pendidikan berbasis teknologi terkemuka di Indonesia.'),
(9, 'Privy.id', 'privyid_logo.png', 'Jakarta', 'PrivyID is revolutionizing the way people being identified in the cyberspace and the way online transaction is carried out. We believe that Trusted Identity and Digital Signature are the foundations of a healthy online transaction ecosystem. Led by Marshall Pribadi as the CEO who is listed in Forbes 30 Under 30 Asia and an Endeavor Entrepreneur, PrivyID is growing so fast by having 3 million users and 172 enterprise customers in less than three years.   PrivyID obtained ISO 27001:2013 certification on Information Security Management System and has gained numerous accolades such as The Most Promising Fintech 2017 by Danamon Bank and the winner of fintech category at 2017 Echelon Asia Summit Singapore.   Our notable investors are Telkom Indonesia, Bank Mandiri, Gunung Sewu Group, and Mahanusa Capital. We have a very energetic and healthy working cultures with surprising and fun working place. We have our private badminton court, basketball court, mini theatre, coffee bar with trained baristas, and super cool 84-inch Surface Hub. We provide an exceptional supports and rewards to your innovation in which sky is not even the limit.'),
(10, 'Shopee', 'Shopee-logo.jpg', 'Jakarta', 'Shopee is the leading e-commerce platform in Southeast Asia and Taiwan. It is a platform tailored for the region, providing customers with an easy, secure and fast online shopping experience through strong payment and logistical support.  Shopee aims to continually enhance its platform and become the region’s e-commerce destination of choice via ongoing product optimisation and localised user-centered strategies.   Shopee, a Sea company, was first launched in Singapore in 2015, and has since expanded its reach to Malaysia, Thailand, Taiwan, Indonesia, Vietnam and the Philippines. Sea is a leader in digital entertainment, e-commerce and digital financial services across Greater Southeast Asia. Sea\'s mission is to better the lives of consumers and small businesses with technology, and is listed on the NYSE under the symbol SE.  The Shopee team is rapidly expanding across the region and we are constantly on the lookout for talents who have the passion and drive to become part of a fast-moving and dynamic team. Do check out our career website http://careers.shopee.sg/ for our available positions!'),
(11, 'Sale Stock', '2_red_SS_Logo.png', 'Jakarta', 'Sale Stock is a tech startup that leverages Artificial Intelligence to give access to affordable quality clothing to the next billion of people.   We\'re the best startup to work for in Indonesia, among 43.100 companies and 470.000 respondents included in the survey.   We\'re a bunch of geeks who used to work at Facebook, Google, Apple, Amazon, Palantir, NASA, and Sony among others. Wanna geek together? We\'re hiring.'),
(12, 'OVO (PT Visionet Internasional)', '1a956c46450e1847584fd382f605b0a6_XL.jpg', 'Jakarta', 'OVO is a leading Indonesian payments, rewards and financial services platform. OVO is now available in 115 million devices with access to payments, transfers, cash-in/out, rewards, asset management and investments. OVO is accepted in more than 300 cities across the Indonesian archipelago and we are committed to building Indonesia’s largest payments and financial technology company.  Currently we have hundreds team members and over half of them are in Technology putting us as one of the best Tech Startup company that provides you with exciting career journey!  We are constantly looking for passionate people to j#joinovoaja! Find your opportunity on www.ovo.id/career  For business inquiries, reach out to: OVO Contact Center T: 1 500 696 (Monday-Sunday/24 hours) E: cs@ovo.id'),
(13, 'Kesato & Co', 'logo-1572355669756-images.png', 'Bali', 'Kesato & Co is a Digital Creative Agency which creates experiences for people and businesses needs. Founded in 2010 in Paris, France, Kesato & Co decided to move its headquarters and grow up in Bali, Indonesia.  Kesato & Co provides digital marketing strategy that is adaptable to your business which allows you to reach your target in both online and offline. Conscientious, wise and attentive, we transform the world of digital into a real experience.'),
(14, 'Inforama', 'inforama.jpeg', 'Yogyakarta', 'nforama is a collaborative cloud based data capture and document production platform.  Our web form technology enables organizations to design online and mobile forms. These forms can be completed by third parties or mobile workers on any device. The data captured via Inforama\'s web forms can then be used to produce customer documents including contracts, reports, letters, forms and emails.   Enterprise users can use Inforama APIs to integrate with in house systems and other cloud services.   Our web based solution reduces document production and IT costs while giving great flexibility around e-transactions and structured documents, maximizing every customer interaction.  Visit our website for a free 30 day trial http://www.inforama.com/  For a quick overview, watch our YouTube video https://www.youtube.com/watch?v=iDutfgcADSI'),
(15, 'PasarPolis', 'pasarpolis.jpg', 'Jakarta', 'PasarPolis.com merupakan e-commerce pertama di Indonesia yang berisi layanan informasi, perbandingan dan aplikasi yang menyediakan berbagai produk asuransi di Indonesia. Portal ini dibuat bertujuan untuk memudahkan masyarakat dalam mendapatkan informasi perbandingan asuransi secara cepat, mudah dan aman.  '),
(16, 'PT. Gudang Garam Tbk', 'logo-1573128855498.jpg', 'Jakarta', 'as'),
(17, 'Biznet', 'biznet.jpeg', 'Jakarta', 'Biznet specializes in Supplier Performance Management (SPM).   Since 1999, Biznet\'s SPM software and consulting services have been trusted by many of the world\'s leading companies to manage their SPM programs, delivering operational efficiencies, cost control and reducing risk through improved management of the supply chain.  An effective SPM program ensures the benefits and requirements identified at contract award stage are delivered throughout the duration of the contract, building effective strategic supplier relationships and continuous performance improvement.  Biznet\'s consulting team have unrivalled experience in successfully implementing SPM programs in the oil and gas industry. Engaging them will ensure your program is up, running and delivering on objectives in a remarkably short time-scale.   BiznetP6, Biznet\'s cloud-based SPM software allows clients to efficiently measure, report on and manage the performance of their key suppliers. BiznetP6 uses configurable KPIs populated by scorecard data and surveys to give clients an accurate, real-time view of suppliers\' performance. Results can be easily compared across supplier, location, product line and category giving early warning of potential risk patterns and driving continuous improvement.  Speak to us to find out what could be achieved with a Supplier Performance Management program driven by Biznet.  Telephone Biznet on +1 713 357 6555 or +44 28 7127 7050  Email : info@biznetsolutions.com  Follow us to keep up to date with the latest in Supplier Performance Management news, knowledge and events.'),
(18, 'Gameloft', 'gameloft.jpeg', 'Yogyakarta', 'We are Gameloft and our greatest reward is seeing that 2.8 million new Gameloft games are downloaded every day.  Our dream to offer mobile games to the entire planet through our products is about to become a reality.   We owe our success to the talent and passion of our teams. It is because of their dedication to excellence and attention to detail that we can offer games of unparalleled quality to our millions of fans.  Do we have strong franchises? Yes! Just take a look at Asphalt, Order & Chaos, Modern Combat or Dungeon Hunter. . We also have a great network of partners to help us deliver cool new games to your favorite device. Think Universal, Illumination Disney®, Marvel®, Hasbro®, Fox Digital Entertainment, Mattel®, Ferrari® and many more.  Nous sommes Gameloft et voir que 2,8 millions de nouveaux jeux Gameloft sont téléchargés chaque jour est notre plus grande récompense. Notre rêve d\'offrir des jeux mobile à la planète entière à travers nos produits est en passe de devenir une réalité. Nous devons notre succès au talent et à la passion de nos équipes. C\'est grâce à leur souci de l\'excellence et du détail que nous pouvons proposer des jeux d\'une qualité inégalée à nos millions de fans. Avons-nous des franchises bien établies ? Oui ! Regardez Asphalt, Order & Chaos, Modern Combat ou Dungeon Hunter. Nous avons également un excellent réseau de partenaires, qui nous permet de vous offrir de nouveaux jeux extraordinaires sur votre appareil préféré. Pensez à Universal, Illumination, Disney®, Marvel®, Hasbro®, Fox Digital Entertainment, Mattel®, Ferrari® et à bien d\'autres.'),
(83, 'Tiket.com', 'logo-1572828138045.jpeg', 'Jakarta', 'Traveling Pintar Semua Dalam 1 Genggaman, Booking di Tiket.com Sekarang! Promo Setiap Hari Cuma di Tiket.com - Cari Harga Tiket & Hotel Terbaik Sekarang! Smart Traveler. Tanpa Biaya Tambahan. International & Domestik. Smart Refund. Smart Roundtrip. Cicilan 3/6/12.'),
(96, 'Gojek', 'logo-1573047375979.png', 'Jakarta', 'Meet Solv, Gojek’s new logo Founded on the principle of solving everyday challenges with technology, the Gojek app has evolved from offering just ride-hailing to a suite of more than 20 services today. As we continue to grow as a leading tech company serving everyday solutions for millions of users across Southeast Asia, our passion for problem-solving grows.  This journey builds on our ever-present dedication to creating seamless experiences for users, and providing the socio-economy impact for millions of our partners (drivers, merchants, service providers).  Our new logo symbolizes Gojek’s transformation from being a ride-hailing service to becoming the largest Super App with three platforms: consumer, driver, and merchant applications, with a variety of smart ways to eliminate hassles.  We believe that with Gojek, and with continuous technological innovations, There Is Always A Way to solve everyday problems and affect positive social impact.'),
(97, 'Niagahoster', 'logo-1573084800260.jpg', 'Yogyakarta', 'Niagahoster adalah layanan hosting murah unlimited dengan cPanel dan server Indonesia. Layanan hosting Indonesia kelas bisnis yang menggunakan data center bersertifikasi tier-4 yang canggih dan modern dari DCI Indonesia. Layanan hosting yang menjamin kualitas uptime dan akses website yang cepat.  Niagahoster merupakan bagian dari Hostinger Group, sebuah grup hosting international yang menangani lebih dari 500 server di seluruh dunia. Dengan pengalaman yang dimiliki, Niagahoster merupakan pilihan terbaik untuk meningkatkan kredibilitas bisnis dan website Anda.  Selain layanan web hosting, Niagahoster juga menyediakan domain murah, domain internasional maupun domain Indonesia, server VPS murah, keamanan SSL/HTTPS, email hosting, jasa pembuatan website, hingga periklanan Google Adwords.');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `salary` int(11) NOT NULL,
  `location` varchar(30) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `name`, `description`, `salary`, `location`, `category_id`, `company_id`, `updated_at`, `created_at`) VALUES
('040c2b76-e48f-4b50-968c-3ede8bf5ca6c', 'Back End Developer', 'What is Back-End Developer?\r\n\r\nBack End Developer is someone who will be responsible for the server side of web applications. Someone who have excellent programming skills and passion for developing applications or improving existing ones. Back – End developer will work closely with our Project Manager to ensure system consistency and improve user experience. Ultimately, someone who able to develop and maintain functional and stable web applications to meet Client’s need.\r\n\r\nWhat will you do?\r\nParticipate in the entire application lifecycle, focusing on coding and debugging\r\nWrite clean code to develop functional web applications.\r\nTroubleshoot and debug applications\r\nPerform UI tests to optimize performance\r\nManage cutting-edge technologies to improve legacy applications\r\nCollaborate with Front-End developers to integrate user-friendly elements with server side logic\r\nAnalyze and isolate issues, make recommendations for future upgrades.\r\nOptimization of the application for maximum speed and scalability\r\nGather and address technical and design requirements\r\nImplementation of security and data protection and data storage solutions\r\nProvide information, training and support to internal teams if needed\r\nCreate a technical documentation Build reusable code and libraries for future use\r\nLiaise with developers and administrators to identify new features\r\nFollow emerging technologies.\r\n\r\nMinimum Qualifications\r\nProficiency in writing clean and semantic MVC Frameworks (Laravel)\r\nProficiency in AJAX, JSON/REST/XML/SOAP Web services\r\nHands on knowledge of jQuery, JS MVC Framework (AngularJS/ React/ VueJS)\r\nHands on knowledge of distributed version control system (Git/ Github/ Gitlab)\r\nHands on knowledge of SQL/MySQL\r\nExperience with Agile product development environment\r\nExperience with mobil application development using Hybrid system\r\nBali positions only.', 7000000, 'Bandung', 1, 13, '2019-10-20 23:41:21', '2019-10-20 23:40:35'),
('148124b0-5108-408d-863d-1bf0b4bca109', 'Network Administrator (GNS)', 'Job Description\r\n\r\nDuties and responsibilities include\r\nOperations, management, and development on routers/switches/firewalls (Linux and CISCO/HP/etc. equipment);\r\nHands-on troubleshooting and debugging of layer 2 and layer 3 issues;\r\nParticipate in the specification and implementation of global networking standards and equipment configurations;\r\nImplementing best practices and procedures in all areas of network operations;\r\nGuiding and enabling professional development of technical staff\r\nProposing, documenting and implementing processes for reporting, auditing, and management of a global network\r\nDocument technical procedures, standards, and policies;\r\nDeployment and installation of new Telecom connections and equipment (in offices and in data centers);\r\nPossibility to work on pager duty 24/7;\r\nGeneral level 2/3 support.\r\n\r\nQualifications\r\n\r\nA solid understanding of fundamental and advanced networking concepts and protocols is more valuable than experience with any particular platform, hardware, or vendor.\r\n(Essential) 5+ years networking experience in a network environment;\r\n(Essential) Excellent interpersonal and communication - ability communicate in English essential;\r\n(Essential) Strong organizational, analytical, and project-management skills;\r\n(Essential) Strong experience with Open Source tools and operating systems (OpenBSD/Linux);\r\n(Essential) Ability to work under stress and in a 24x7x365 production environment;\r\n(Essential) Experience with Cisco equipment (router and switch, IOS);\r\n(Essential) Mastery of networking layers 2 and 3;\r\n(Essential) Knowledge and experience with equipment/network concepts (Firewalls, proxies, security);\r\n(Essential) Knowledge of, and experience with, network services and equipment (e.g. BPG, spanning-tree, HSRP, TACACS+/Radius, VPN/IPSEC, etc.);\r\n(Essential) Strong experience with TCP/IP protocol/stack and low-level network troubleshooting;\r\n(Asset) Experience with wireless (Wi-Fi) networking', 7800000, 'Jakarta', 3, 18, '2019-10-21 00:27:24', '2019-10-21 00:00:40'),
('18fae09b-cb54-46bd-b9d9-40591f5124a4', 'Project Engineer WIFI', 'Tanggung Jawab\r\nMelakukan aktifasi ke customer\r\nMelakukan troubleshoot koneksi free wifi via remote atau visit ke customer\r\nMelakukan konfigurasi Mikrotik, Router, dan Access Point\r\nPersyaratan\r\nS1 (Sistem Komputer/Sistem Informasi/IT).\r\nIPK minimal 3.00.\r\nMampu berbahasa inggris dengan baik\r\nMenguasai konfigurasi Mikrotik/Cisco basic diutamakan.\r\nMemiliki sertifikat MTCNA/CCNA merupakan nilai tambah.\r\nMemiliki pengalaman dalam server linux/windows server merupakan nilai tambah.\r\nMemiliki pengalaman konfigurasi Wireless Router dan Access Point.\r\nFresh Graduate dipersilahkan.', 7000000, 'Jakarta', 3, 17, '2019-10-20 23:59:36', '2019-10-20 23:58:28'),
('2d6bc34b-0102-4528-bdc4-70dc9697d519', 'Test', '123', 500000, 'Solo', 1, 1, '2019-11-14 19:46:21', '2019-11-14 19:46:21'),
('3549baa7-45a3-4f58-aab7-7e5e95963636', 'Front End Engineer Fulltime · Jakarta - Yogyakarta', 'Placement: Jakarta, Bandung, Yogyakarta (relocation provided)\r\n\r\nSorabel\'s mission is giving access to affordable, quality clothes to the next billion of people. Product development in Sorabel spans from sourcing process, clothing production, warehouse and delivery fulfilment, finance, customer service, marketing and store front web/app.\r\n\r\nThe Followings Are Some Points That Will Describe What a Software Engineering In Product Will Do\r\n\r\nIdeally you should have a good engineering background and eagerness to improve the existing product experience.\r\nImagine, prioritize, build, instrument, ship, and analyze product changes for growth/optimisation\r\nAnalyze existing product/flow and propose relevant improvement\r\nBuild features for line of business products\r\nResponsible for building all the necessary features/tools to improve existing process or unlock potential growth\r\nContribute to application reliability including performance and automation test\r\nThings indicating you\'ll be great for this position\r\nFast learner and having good analytical thinking\r\nExcellence in proposing creative solutions to challenging problems\r\nPassion for experimentation and new ideas\r\nPassion for learning and always improving yourself and the team around you\r\nGood communication skill, team player and comfortable working with cross functional team\r\nStrong understanding and experiences in HTML, CSS, Javascript and React framework', 5000000, 'Jakarta, Bandung, Yogyakarta', 1, 11, '2019-10-20 23:34:37', '2019-10-20 23:33:21'),
('50edea9c-73d6-4882-b46e-cf8b147518ae', 'Kerja', 'Kerja keras bagai kuda', 8000000, 'Solo', 3, 11, '2019-11-13 07:03:49', '2019-11-13 07:03:49'),
('8ea474dc-954c-4d44-afeb-adcca28d1df8', 'Front End Developer', 'We are a group of multinational web developers who are fascinated by state-of-art web technologies yet genuinely caring about bringing enjoyable web experience to our users. We value fundamentals more than ever-changing wind in the front end landscape. We believe in \"HTML for the content, CSS for the presentation, JavaScript for the interaction\". We cut following the grains, not against it.\r\n\r\nResponsibilities\r\nDesign and implement leading platform used and loved by hundreds of millions of users.\r\nBreak down and implement solutions to complex and flexible business features.\r\nMaintain and improve our high-quality in-house JavaScript libraries and toolsets, for example a complete React UI framework following our design guidelines.\r\nParticipate in fierce and candid code review with peers.\r\nParticipate in regular internal technology sharings and other regional tech events.\r\nContinuously learn about new engineering techniques and technologies.\r\n\r\nMinimum Qualifications\r\n\r\nRequirements:\r\nPassionate about coding and programming, innovation, and solving challenging problems.\r\nStrong knowledge in JavaScript fundamentals.\r\nWell versed in various browser technologies.\r\nLove technologies.\r\nEnjoy teamwork\r\n\r\nSkills Below Are Optional But Preferable\r\nHands-on experiences and knowledge about React JS.\r\nExperience in writing type-safe code with Flow or TypeScript', 7000000, 'Jakarta', 1, 10, '2019-10-20 23:32:03', '2019-10-20 23:29:31'),
('903dd19d-8c25-4866-a98f-336ec17720c3', 'IT Support', 'Installing and configuring computer hardware, software, PABX systems, networks (including good understanding in topology and cabling), printers and scanners\r\nMonitoring and maintaining computer systems and networks\r\nResponding in a timely manner to service issues and requests\r\nProviding technical support across the company, might be required to be available on weekends (during emergencies only)\r\nSetting up accounts for new users\r\nRepairing and replacing equipment as necessary\r\nTesting new technology\r\nProcuring and managing IT assets (laptops, routers, server, printer ink cartridges, etc)\r\nHandling monthly IT-related bills (internet, phone, etc)\r\n\r\nMinimum Qualifications\r\nProven work experience as a Technical Support Engineer, IT Support Engineer, IT Help Desk Technician or similar role\r\nMust have hands-on experience with Mikrotik products, PABX systems (including Elastix software), and X-Lite Softphone\r\nExperience from a call center company will be highly considered\r\nMust speak English\r\nGood understanding of computer systems, mobile devices and other tech products\r\nAbility to diagnose and troubleshoot basic technical issues\r\nExcellent problem-solving and communication skills\r\nAbility to provide step-by-step technical help, both written and verbal\r\nBS degree in Information Technology, Computer Science or relevant field', 6500000, 'Jakarta', 2, 15, '2019-10-20 23:46:45', '2019-10-20 23:44:29'),
('91989013-9f0d-4b9d-9491-91bfb344548a', 'Gak mmn', 'Desc', 122, 'Namam', 1, 1, '2019-11-14 20:10:53', '2019-11-14 20:10:53'),
('aec1e34e-bb46-40d9-810a-872f323cf33b', 'Yebsn Uwu yoa ', 'Qqqqqq', 11111, 'Nsnsmms', 1, 1, '2019-11-14 00:53:55', '2019-11-14 00:42:11'),
('c7e7ec0c-ddf6-44bb-89d5-92cd44bf509a', 'Staff Administrasi Dua Tiga empat lima enam', 'Dalam rangka memperluas jaringan bisnis dan memenuhi kebutuhan sumber daya manusia PT Gudang Garam Tbk di Lowongan Posisi :\r\n\r\n\r\nLowongan untuk :\r\n• Manager Servise\r\n• Kepala Produksi\r\n• Staff Administrasi\r\n• Sekretaris\r\n• Supervisior\r\n• Customer Service\r\n• Production Planning\r\n• Marine Terminal Superintendent\r\n• Engineering Manager\r\n• Elektro\r\n• Elektronika / Elins / Telekomunikasi\r\n• Mesin\r\n• Industri\r\n• Sipil\r\n• Kimia / Teknik Lingkungan\r\n• Manajemen Bisnis / Niaga\r\n• Teknologi Informasi/Informatika\r\n• Keuangan\r\n• Akuntasi\r\n• Komunikasi\r\n• Hukum\r\n\r\n\r\nFasilitas kartawan:\r\n• Gaji Pokok Rp. 15.000.000,-/bulan (tergantung posisi)\r\n• Gaji Bagi Karyawan Baru Rp.7.900,000 Hingga Rp.15.000,000,-/bulan\r\n• Lembur Sesuai depnaker\r\n• Uang Makan & Transportasi,Tunjangan Hari Raya Insentif\r\n• Jamsostek Asuransi Kesehatan.\r\n• Seragam.\r\n\r\n\r\nPersyaratan :\r\n• Pria/Wanita, usia maksimal 20 tahun ke Atas\r\n• Pria, pengalaman minimal 1 tahun (1,4,5)\r\n• Pendidikan minimal lulusan SMA, SMK, DI, DII, DIII, S1, S2. semua jurusan (1,4,5)\r\n• Teliti dan pekerja keras\r\n• Bersedia ditempatkan di wilayah kerja PT Gudang Garam Tbk\r\n\r\n\r\nKelengakapan berkas lamaran :\r\n• Surat lamaran dan Daftar Riwayat Hidup.\r\n• Foto Copy ijazah dan transkrip\r\n• Fotokopi KTP\r\n• Pasphoto ukuran 4 x 6 cm\r\n• Nomer hp', 6700000, 'Semarang', 6, 16, '2019-11-06 16:38:44', '2019-10-20 23:47:21'),
('cc765eae-dc22-4fcc-8be0-7519d5890a1e', 'Mobile Developer', 'Tugas / Tanggung Jawab\r\nMelakukan Pekerjaan yang berhubungan dengan posisi Mobile Programmer(Mobile Android/ Mobile IOS)\r\nDibawah pengawasan PIC untuk menerjemahkan dokumen hasil perancangan dan desain ke dalam kode program sesuai dengan platform yang telah ditentukan yaitu Mobile (Android atau iOS).\r\nBerdomisili di Yogyakarta\r\nKualifikasi / Persyaratan : \r\nPendidikan Minimal D3/S1 (Jurusan Sesuai / Terkait)\r\nBerpengalaman menangani program Mobile (IOS dan Android)\r\nMelakukan compilasi app mobile\r\nMemahami Android SDK dengan versioning dan library gradle\r\nMemahami HTML5, CSS/CSS3, JavaScript\r\nMemahami mobile Framework seperti Framework7, Ionic\r\nMemahami angular, dan react menjadi nilai lebih\r\nMemahami web programming PHP (Native maupun PHP Framework seperti Laravel dan Code igniter)\r\nMemahami database MySQL, PostgresSQL (memahami Non SQL menjadi nilai lebih)\r\nMampu menggunakan jQuery dan AJAX secara optimal\r\nMemahami REST API atau web service seperti JSON dan XML\r\nMengerti platform iOS menjadi nilai plus\r\nMemahami flowchart\r\nMemahami Konsep OOP\r\nUpload APK ken Google Playstore atau Apple Store\r\nTekun\r\nDapat berkomunikasi dengan baik\r\nSuka belajar\r\nmemiliki sikap leadership\r\nSiap Lembut untuk mencapai target\r\nDapat bekerja dalam tim\r\nMengetahui tentang teknologi terbaru\r\nFresh Graduate Wellcome', 5000000, 'Yogyakarta', 1, 14, '2019-10-20 23:43:21', '2019-10-20 23:42:01'),
('cf2b0c83-71ba-4184-a215-44adb3ba3320', 'Oke', 'Qwe', 123, 'Solo', 2, 11, '2019-11-14 20:05:44', '2019-11-14 20:05:44'),
('d43ee506-5d16-42b9-8758-0a886858d513', 'Digital Performance Marketing Specialist', 'ob Description\r\nPlan and execute all digital acquisition activities (for mobile app and website) using ads platform including SEM, social media, display advertising campaigns, affiliate marketing, programmatic, etc.\r\nWork on a budget to reach maximum KPI keeping the CAC at the optimum level.\r\nManage communication with multiple vendors and third-party trackers in order to achieve acquisition objectives.\r\nMeasure and report performance of all digital marketing campaigns, and assess against goals (ROI and KPIs).\r\nIdentify trends and insights, and optimize spend and performance based on the insights.\r\nUtilize the strong analytical ability to evaluate end-to-end customer experience across multiple channels and customer touch points.\r\nDo campaign acquisition fraud monitoring and take actions to minimize the fraud numbers.\r\nPlan and create a small-scale A-B test campaign to optimize campaign and creative performance better.\r\nSuggest new digital channels that have the potential to increase new user numbers in an efficient way.\r\nManage to set up integration of Ruangguru apps with other third parties platform whenever it is required.\r\nJob Requirement\r\nBachelor\'s degree (or higher) in any related field with a strong quantitative background.\r\nProven working experience in digital marketing (Min 2 years), extensive experiences in managing in-house digital performance marketing at technology company (such as e-commerce, online-travel, mobile-gaming, etc) is preferable.\r\nHighly proficient in using digital ads platform such as Facebook Ads, Google Ads, Twitter Ads\r\nHave experience in managing Ad Networks for acquisition campaigns.\r\nHave basic understanding of organic acquisition such as App Store Optimization (ASO) and Search Engine Optimization (SEO).\r\nExperience in setting up platform integration (for mobile app and website) with third parties (ex-Google, Facebook, Sizmek, Appsflyer) for campaign set-up and tracking purposes.\r\nCreative in identifying target audiences and devising digital campaigns that engage consumers the most.\r\nHave a good understanding of mobile attribution tools (e.g. Appsflyer).\r\nUnderstand the basics of mobile app install fraud methods and its monitoring tool (e.g Appsflyer Protect 360).\r\nHave basic understanding of Google Analytics.\r\nStrong analytical skills and data-driven thinking.\r\nUp-to-date with the latest trends and best practices in online marketing and measurement.\r\nAble to generate meaningful reports using tools such as Google Data Studio would be a plus.\r\nExperiences in handling programmatic ad buying would be a plus.', 7500000, 'Jakarta', 4, 8, '2019-10-20 23:57:22', '2019-10-20 23:56:27'),
('d92554b2-2a7d-47e2-b392-c7cbdabbad2e', 'Test5566', 'Test', 123, 'Test', 1, 1, '2019-11-15 04:28:58', '2019-11-14 20:31:51'),
('e83c6195-ece5-4004-9b3e-8b25f57118d7', 'Frontend Developer', 'Oversee the activities of the junior frontend developer teams and work closely with the business\'s backend developers\r\nImplement the user interface and also engineer the experience of every site or software being put out by the business\r\nBuild out patterns and abstractions that emphasize the efficiency of sites or software\r\nMake the most of tools such as React and SASS\r\nEvaluate emerging technologies and avails strategic, innovative, and cost-effective solutions that increase the efficiency, reliability, and integration of the business\'s sites or software\r\nConduct daily report to the Head of Engineering\r\n\r\nMinimum Qualifications\r\nMin. a Bachelor\'s degree majoring in Computer Science or any other relevant field\r\nMust have had more than 4 years of working experience in a frontend development department, preferably working in a junior frontend development will be a plus\r\nExperienced with functional programming and Javascript libraries and frameworks; such as Rear, Angular, Ember, and Backbone as well as vast experience building complex web user interfaces\r\nMust also highly proficient in JS, Vue.JS, AngularJS (2.0), HTML, CSS.\r\nStrong analytical and effective communication skills', 8000000, 'Jakarta', 1, 12, '2019-10-20 23:37:28', '2019-10-20 23:36:31');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
('05aa249e-2e0f-471e-b8ec-d7aa43a6e12c', 'test123@gmail.com', '$2a$10$WmsiDCtkXKu25XuPgGWz6uLTbpjYSHHRjTIIlU5qn03a.HSEe0OVW'),
('2030a839-ba44-423c-ad78-62278d897227', 'mahe1@gmail.com', '$2a$10$.b4yUl0e1Tqpv/RMxFVQVuRuzvjYQu.pzseQOryClaEjrCzptuKDy'),
('28037502-bebd-4a51-a524-c4ebb251bd38', 'mahe1@gmail.com', '$2a$10$TH/KJS5wkfS8ZC9x6Qz//us.d9g5ZmGhNwqqMOb4fj.RVoJmeJdOm'),
('85fbe9f2-dfa9-41cd-bad0-6b988ccca6e0', 'testregis@gmail.com', '$2a$10$c80WWGfHBAdMh330W2WaY.GG/lv/4q0aSQF3ZEfY46Zap9UOBj3zi'),
('89490398-f617-4b7b-8758-23b54458d19d', 'mahe@gmail.com1', '$2a$10$Bs0wsB6bxEufu2.0saaox.llMzJtEbQvcEBUpOi6iiSfZlOpTdjEu'),
('8a9c61b2-a12a-4f01-ae13-059429092ed2', 'aku@test.com', '$2a$10$XAuf5qgnS9IP3MzeJahR/e/l1jkmI45MbgJvDc./BfH7j7SVyGVQG'),
('8c5a89c3-1dd3-4e82-9674-1807e7dbb9a6', 'mahe@gmail.com', '$2a$10$kXHQGDxf8.XyEjPSCGr/Cu5fbTJvhEjrtBVnljK3Wzs1LS5gna2W2'),
('c1dce552-a24c-4bb7-b66c-90fb2df2e07c', 'test@gmail.com', '$2a$10$J5EUO8m1ukKzQiNruVh6Fec6.fQM5ItNro00qSaeseh2.iNafe5SC'),
('f50d6ebb-2afb-426c-ab13-11f8cfd62b75', 'coba@gmail.com', '$2a$10$5Pz2fvQ28yag9zCsHCmxE.7jdLT2Hfub2E/3kV/iGrMk6B2i/ehFm');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `company_id` (`company_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `jobs`
--
ALTER TABLE `jobs`
  ADD CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `jobs_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `companies` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
