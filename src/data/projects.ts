export type Locale = "vi" | "en";

export type Project = {
  id: number;
  title: string;
  description: Record<Locale, string>;
  image: string;
  tags: string[];
  company: string;
  companyType: "personal" | "freelance" | "client";
  demoLink?: string;
  githubLink?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: 0,
    title: "An Gia House",
    description: {
      vi: "Website bán khóa điện tử, đèn năng lượng mặt trời và quạt trần đèn — tích hợp giỏ hàng, danh mục sản phẩm, blog và chuẩn SEO.",
      en: "An e-commerce site for smart locks, solar lights and ceiling fans — with cart, product catalog, blog and SEO built in.",
    },
    image:
      "https://angiahouse.com/uploads/1782115965342-351407164.png",
    tags: ["Next.js", "E-commerce", "SEO", "Blog"],
    company: "Freelance",
    companyType: "freelance",
    demoLink: "https://angiahouse.com/",
    featured: true,
  },
  {
    id: 6,
    title: "SuperMall — E-commerce Ecosystem",
    description: {
      vi: "Hệ sinh thái thương mại điện tử đa nền tảng: mobile app cho khách, admin dashboard thời gian thực và RESTful API server. Thông báo real-time qua Socket.io, quản lý kho biến thể, phân quyền RBAC và báo cáo thống kê trực quan.",
      en: "A multi-platform e-commerce ecosystem: a customer mobile app, a real-time admin dashboard, and a RESTful API server. Real-time notifications via Socket.io, variant inventory management, RBAC, and interactive analytics.",
    },
    image:
      "https://res.cloudinary.com/de3olloc4/image/upload/v1766557990/dashboard_bgrdrb.png",
    tags: ["Next.js 14", "TypeScript", "Node.js", "Socket.io", "MongoDB", "Shadcn/ui"],
    company: "Personal",
    companyType: "personal",
    demoLink: "https://shop-app-seven-pink.vercel.app/",
    githubLink: "https://github.com/dennisnguyen9722/ShopApp",
  },
  {
    id: 1,
    title: "Modern Tech E-commerce Platform",
    description: {
      vi: "Nền tảng thương mại điện tử full-stack bán sản phẩm công nghệ, nối liền trải nghiệm mua sắm của khách với công cụ quản trị mạnh cho admin.",
      en: "A full-stack e-commerce platform for tech products, bridging a seamless shopping experience with a powerful admin management tool.",
    },
    image:
      "https://res.cloudinary.com/de3olloc4/image/upload/v1765790044/anh-bia_iwbgfp.png",
    tags: ["NextJS", "NodeJS", "DnD Kit", "ExpressJS", "MongoDB", "SocketIO"],
    company: "Personal",
    companyType: "personal",
    demoLink: "https://shopecommerce-web.vercel.app/",
    githubLink: "https://github.com/dennisnguyen9722/shopecommerce",
  },
  {
    id: 2,
    title: "Trello Clone",
    description: {
      vi: "Bảng Kanban full-stack với kéo–thả, RESTful API xác thực JWT và phân quyền theo vai trò, cập nhật real-time qua WebSocket cho cộng tác nhóm.",
      en: "A full-stack Kanban board with drag-and-drop, a JWT-authenticated REST API with role-based access, and real-time collaboration over WebSocket.",
    },
    image:
      "https://res.cloudinary.com/de3olloc4/image/upload/v1762750265/anh-mo-ta_wmelvn.jpg",
    tags: ["React", "Redux Toolkit", "DnD Kit", "Node.js", "MongoDB"],
    company: "Personal",
    companyType: "personal",
    demoLink: "https://trello-web-iota-two.vercel.app/login",
  },
  {
    id: 3,
    title: "Quiz App",
    description: {
      vi: "Ứng dụng trắc nghiệm tương tác, giao diện thân thiện, dùng custom hooks và Context API để quản lý trạng thái câu hỏi và câu trả lời.",
      en: "An interactive quiz app with a friendly UI, using custom hooks and the Context API to manage question and answer state.",
    },
    image:
      "https://res.cloudinary.com/de3olloc4/image/upload/v1762750611/quizzapp_tceqwr.png",
    tags: ["React", "Context API", "Local Storage", "CSS Modules"],
    company: "Personal",
    companyType: "personal",
    githubLink: "https://github.com/dennisnguyen9722/Quick-App-React",
  },
  {
    id: 4,
    title: "Todo List App",
    description: {
      vi: "Ứng dụng todo tương tác, kiến trúc tách frontend/backend, MongoDB làm NoSQL database, Tailwind và shadcn/ui cho giao diện nhanh và đồng bộ.",
      en: "An interactive todo app with a split frontend/backend architecture, MongoDB as the NoSQL store, and Tailwind + shadcn/ui for a fast, consistent UI.",
    },
    image:
      "https://res.cloudinary.com/de3olloc4/image/upload/v1762750614/Screenshot_1_fsinok.png",
    tags: ["React", "NodeJs", "MongoDB", "ExpressJs", "Tailwind 4"],
    company: "Personal",
    companyType: "personal",
    demoLink: "https://yudpanh-todoapp.onrender.com/",
  },
  {
    id: 5,
    title: "Asset Valuation System — Sacombank",
    description: {
      vi: "Website định giá tài sản cho Sacombank, xây bằng ReactJS và Java Spring Boot, tích hợp luồng nghiệp vụ định giá và báo cáo thống kê.",
      en: "An asset valuation web app for Sacombank, built with ReactJS and Java Spring Boot, integrating the valuation workflow and statistical reporting.",
    },
    image: "https://res.cloudinary.com/de3olloc4/image/upload/v1787717106/sacombank_h5hofj.png",
    tags: ["ReactJS", "Spring Boot", "MySQL", "Business Analysis"],
    company: "Vinorsoft Technology",
    companyType: "client",
    githubLink: "https://github.com/dennisnguyen9722/SBA",
  },
  
  {
    id: 7,
    title: "Địa Ốc An Gia",
    description: {
      vi: "Website bất động sản TP.HCM với công cụ tìm kiếm nâng cao theo khu vực, loại hình, khoảng giá, diện tích và số phòng ngủ.",
      en: "A Ho Chi Minh City real-estate site with advanced search by area, property type, price range, size and number of bedrooms.",
    },
    image:
      "https://res.cloudinary.com/de3olloc4/image/upload/v1787717106/diaoc_ry0y6f.png",
    tags: ["Next.js", "Real Estate", "Advanced Search", "SEO"],
    company: "Freelance",
    companyType: "freelance",
    demoLink: "https://diaocangia.com.vn/",
  },
  {
    id: 8,
    title: "Bình Doanh Cons",
    description: {
      vi: "Website công ty xây dựng, giới thiệu năng lực thi công và danh mục công trình đã thực hiện, giao diện chuyên nghiệp, chuẩn SEO.",
      en: "A construction company website showcasing capabilities and a portfolio of completed projects, with a professional, SEO-ready design.",
    },
    image:
      "https://res.cloudinary.com/de3olloc4/image/upload/v1787717107/binhdoanh_ffpjha.png",
    tags: ["Next.js", "Corporate", "Portfolio", "SEO"],
    company: "Freelance",
    companyType: "freelance",
    demoLink: "https://binhdoanhcons.vn/",
  },
  {
    id: 9,
    title: "Duhal Led",
    description: {
      vi: "Website đèn LED và thiết bị chiếu sáng, giao diện hiện đại, tối ưu trải nghiệm trên di động.",
      en: "An LED lighting and equipment website with a modern interface, optimized for mobile experience.",
    },
    image:
      "https://res.cloudinary.com/de3olloc4/image/upload/v1787717106/duhal_lafc8j.png",
    tags: ["Next.js", "Lighting", "Responsive", "UI/UX"],
    company: "Freelance",
    companyType: "freelance",
    demoLink: "https://duhallight.vn/",
  },
  {
    id: 10,
    title: "DuyWeb Studio",
    description: {
      vi: "Trang dịch vụ freelance của mình: thiết kế website theo yêu cầu, SEO, marketing, hosting và domain — kèm portfolio và bảng giá.",
      en: "My freelance service site: custom web design, SEO, marketing, hosting and domain — with a portfolio and pricing.",
    },
    image:
      "https://res.cloudinary.com/de3olloc4/image/upload/v1787717959/duywebstudio_gwgowx.png",
    tags: ["Next.js", "Landing Page", "SEO", "Freelance"],
    company: "Freelance",
    companyType: "freelance",
    demoLink: "https://www.duywebsite.io.vn/",
  },
];