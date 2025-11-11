'use client'

import { useTranslations, useLocale } from 'next-intl'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Briefcase } from 'lucide-react'

export default function ProjectsSection() {
  const t = useTranslations('projects')
  const locale = useLocale()

  const projects = [
    {
      id: 1,
      title:
        locale === 'vi'
          ? 'Ứng Dụng Quản Lý Công Việc (Trello Clone)'
          : 'Trello Clone Application',
      description:
        locale === 'vi'
          ? 'Phát triển fullstack bảng Kanban với chức năng kéo thả, Xây dựng RESTful API với xác thực JWT và kiểm soát truy cập dựa trên vai trò, Triển khai cập nhật thời gian thực với WebSocket cho tính năng cộng tác'
          : 'Developed fullstack Trello board with drag-and-drop functionality, Built RESTful API with JWT authentication and role-based access control, Implemented real-time updates with WebSocket for collaborative features',
      image:
        'https://res.cloudinary.com/de3olloc4/image/upload/v1762750265/anh-mo-ta_wmelvn.jpg',
      tags: ['React', 'Redux Toolkit', 'DnD Kit', 'Node.js', 'MongoDB'],
      company: 'Personal Project',
      link: 'https://trello-web-iota-two.vercel.app/login',
      featured: false
    },
    {
      id: 2,
      title: locale === 'vi' ? 'Ứng Dụng Trắc Nghiệm' : 'Quiz Application',
      description:
        locale === 'vi'
          ? 'Xây dựng ứng dụng trắc nghiệm tương tác với giao diện thân thiện và trải nghiệm người dùng mượt mà, Triển khai custom hooks và Context API để quản lý trạng thái câu hỏi và câu trả lời'
          : 'Built interactive quiz application with user-friendly interface and smoothuser experience, Implemented custom hooks for quiz logic and state management',
      image:
        'https://res.cloudinary.com/de3olloc4/image/upload/v1762750611/quizzapp_tceqwr.png',
      tags: ['React', 'Context API', 'Local Storage', 'CSS Modules'],
      company: 'Personal Project',
      link: 'https://github.com/dennisnguyen9722/Quick-App-React',
      featured: false
    },
    {
      id: 3,
      title: locale === 'vi' ? 'Ứng Dụng To Do List' : 'Todo List Application',
      description:
        locale === 'vi'
          ? 'Xây dựng ứng dụng TO DO List tương tác với giao diện thân thiện và trải nghiệm người dùng mượt mà, Kiến trúc tách biệt frontend/backend, sử dụng MongoDB làm cơ sở dữ liệu NoSQL để quản lý các task linh hoạt, Tailwind và shadcn/ui giúp phát triển giao diện nhanh và đồng bộ.'
          : 'Build an interactive TO DO List application with friendly interface and smooth user experience, Separate frontend/backend architecture, use MongoDB as NoSQL database for flexible task management, Tailwind and shadcn/ui for fast and synchronized interface development.',
      image:
        'https://res.cloudinary.com/de3olloc4/image/upload/v1762750614/Screenshot_1_fsinok.png',
      tags: ['React', 'NodeJs', 'MongoDB', 'ExpressJs', 'Tailwind 4'],
      company: 'Personal Project',
      link: 'https://yudpanh-todoapp.onrender.com/',
      featured: false
    },
    {
      id: 4,
      title:
        locale === 'vi'
          ? 'Hệ Thống E-Commerce - Lighting'
          : 'E-Commerce System - Lighting',
      description:
        locale === 'vi'
          ? 'Quản lý và xây dựng hơn 20+ website bán hàng về đèn trang trí sử dụng WordPress. SEO và tối ưu hiệu suất.'
          : 'Managed and built 20+ e-commerce websites for lighting products using WordPress. SEO optimization and performance tuning.',
      image:
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      tags: ['WordPress', 'SEO', 'E-Commerce', 'MySQL'],
      company: 'Huy Hoang Investment',
      link: 'https://huyhoanglighting.vn',
      featured: false
    },
    {
      id: 5,
      title:
        locale === 'vi'
          ? 'Website Doanh Nghiệp & SEO'
          : 'Corporate Websites & SEO',
      description:
        locale === 'vi'
          ? 'Phát triển và tối ưu SEO cho nhiều website doanh nghiệp. Xây dựng hệ thống bảo vệ website và cải thiện ranking.'
          : 'Developed and optimized SEO for multiple corporate websites. Built website protection systems and improved rankings.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      tags: ['WordPress', 'SEO Technical', 'Security', 'Analytics'],
      company: 'Global Branding Online',
      link: '#',
      featured: false
    },
    {
      id: 6,
      title:
        locale === 'vi'
          ? 'Video Production & Motion Graphics'
          : 'Video Production & Motion Graphics',
      description:
        locale === 'vi'
          ? 'Sản xuất video quảng cáo, intro/outro cho nhiều công ty. Chỉnh sửa và tạo hiệu ứng chuyên nghiệp.'
          : 'Produced advertising videos, intro/outro for multiple companies. Professional video editing and effects.',
      image:
        'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=500&fit=crop',
      tags: [
        'After Effects',
        'Premiere Pro',
        'Motion Graphics',
        'Video Editing'
      ],
      company: 'Global Branding Online',
      link: '#',
      featured: false
    },
    {
      id: 7,
      title:
        locale === 'vi'
          ? 'Hệ Thống Định Giá Tài Sản - Sacombank'
          : 'Asset Valuation System - Sacombank',
      description:
        locale === 'vi'
          ? 'Xây dựng website định giá tài sản với ReactJS và Java Spring Boot cho Sacombank. Tích hợp luồng nghiệp vụ định giá và báo cáo thống kê.'
          : 'Built asset valuation website using ReactJS and Java Spring Boot for Sacombank. Integrated valuation workflow and statistical reporting.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
      tags: ['ReactJS', 'Spring Boot', 'MySQL', 'Business Analysis'],
      company: 'Vinorsoft Technology',
      link: '#',
      featured: false
    }
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4"
          >
            {t('badge')}
          </motion.span>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100 dark:border-gray-700 ${
                project.featured ? 'md:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div
                className={`relative overflow-hidden ${
                  project.featured ? 'h-80' : 'h-56'
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold rounded-full">
                    Featured
                  </div>
                )}

                {/* Company Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <Briefcase className="w-3 h-3 text-white" />
                  <span className="text-white text-xs font-medium">
                    {project.company}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link !== '#' && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white dark:bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-colors shadow-xl"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 text-sm rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-blue-700 dark:text-blue-300 font-medium border border-blue-100 dark:border-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:shadow-xl hover:shadow-blue-500/50 transition-all"
          >
            {locale === 'vi' ? 'Xem Thêm Dự Án' : 'View More Projects'}
            <ExternalLink className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
