import { Link } from 'react-router-dom';
import { Post } from '../types';
import { Clock, ArrowRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import { motion } from 'motion/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface PostSliderProps {
  posts: Post[];
}

export default function PostSlider({ posts }: PostSliderProps) {
  const featuredPosts = posts.filter(p => p.featured);

  if (featuredPosts.length === 0) return null;

  return (
    <div className="relative mb-20">
      {/* Background Ambient Glow & Blob */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/20 via-orange-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full inline-block mb-2">
          Featured & Pinned 3D Showcase
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-900">
          Editorial Masterpieces
        </h2>
      </div>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={1}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 120,
          modifier: 1.2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        className="w-full py-6 pb-14"
      >
        {featuredPosts.map(post => (
          <SwiperSlide key={post.id} className="w-full max-w-4xl sm:px-4">
            <div className="relative bg-neutral-950 rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-neutral-800">
              <div className="relative h-[440px] sm:h-[500px] lg:h-[540px] w-full">
                {/* Background Image with Gradient Overlay */}
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Link
                      to={`/category/${post.category.slug}`}
                      className="bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full uppercase tracking-wider transition-colors shadow-md"
                    >
                      {post.category.name}
                    </Link>
                    <span className="text-neutral-300 text-xs flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400" /> {post.readTime}
                    </span>
                  </div>

                  <Link to={`/article/${post.slug}`}>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white hover:text-amber-200 transition-colors leading-tight mb-3">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-neutral-300 text-sm sm:text-base line-clamp-2 mb-6 max-w-2xl font-sans">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-neutral-800/80">
                    <Link to={`/author/${post.author.id}`} className="flex items-center space-x-3 group">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-10 h-10 rounded-full object-cover border border-neutral-700 shadow-sm"
                      />
                      <div>
                        <span className="block text-sm font-medium text-white group-hover:text-amber-400 transition-colors">
                          {post.author.name}
                        </span>
                        <span className="block text-xs text-neutral-400">{post.publishedDate}</span>
                      </div>
                    </Link>

                    <motion.div whileTap={{ scale: 0.95, y: 1 }}>
                      <Link
                        to={`/article/${post.slug}`}
                        className="inline-flex items-center gap-2 bg-white hover:bg-amber-50 text-neutral-900 font-semibold px-6 py-3 rounded-full text-sm transition-all shadow-lg group self-start sm:self-auto"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
