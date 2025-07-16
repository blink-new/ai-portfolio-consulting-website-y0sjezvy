import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { 
  Menu, 
  X, 
  ArrowRight, 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap,
  CheckCircle,
  Star,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Award,
  Users,
  Target,
  Sparkles,
  ChevronRight,
  Play
} from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Badge } from './components/ui/badge'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.98])
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100])

  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Roadmapping",
      description: "Develop comprehensive AI strategies aligned with your business objectives and market opportunities.",
      features: ["Market Analysis", "Technology Assessment", "Implementation Planning", "ROI Modeling"],
      price: "Starting at $25,000"
    },
    {
      icon: TrendingUp,
      title: "Portfolio Optimization",
      description: "Optimize your product portfolio using AI-driven insights and predictive analytics.",
      features: ["Performance Analytics", "Market Positioning", "Resource Allocation", "Growth Forecasting"],
      price: "Starting at $35,000"
    },
    {
      icon: Shield,
      title: "Risk Assessment",
      description: "Identify and mitigate risks in your AI product portfolio with advanced risk modeling.",
      features: ["Risk Modeling", "Compliance Review", "Security Assessment", "Mitigation Strategies"],
      price: "Starting at $20,000"
    },
    {
      icon: Zap,
      title: "Innovation Acceleration",
      description: "Accelerate innovation cycles with AI-powered product development methodologies.",
      features: ["Rapid Prototyping", "Market Testing", "User Research", "Agile Implementation"],
      price: "Starting at $30,000"
    }
  ]

  const caseStudies = [
    {
      title: "Fortune 500 FinTech Transformation",
      client: "Global Financial Services Leader",
      industry: "Financial Services",
      challenge: "Modernize legacy product portfolio with AI capabilities across 15 business units",
      solution: "Implemented comprehensive AI-driven risk assessment and automated trading algorithms with real-time market analysis",
      results: [
        "40% increase in portfolio performance",
        "60% reduction in risk exposure", 
        "25% faster decision making",
        "$2.3B in additional revenue"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      duration: "18 months",
      investment: "$2.5M"
    },
    {
      title: "Medical AI Integration at Scale",
      client: "Leading Medical Technology Company",
      industry: "Healthcare",
      challenge: "Integrate AI into existing medical device portfolio while maintaining FDA compliance",
      solution: "Developed predictive analytics for patient monitoring and diagnostic tools with regulatory-compliant AI models",
      results: [
        "30% improvement in diagnostic accuracy",
        "50% reduction in false positives",
        "20% cost savings in operations",
        "FDA approval for 3 new AI-powered devices"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      duration: "24 months",
      investment: "$3.2M"
    },
    {
      title: "E-commerce Intelligence Platform",
      client: "Top 10 Global E-commerce Platform",
      industry: "Retail Technology",
      challenge: "Optimize product recommendations and inventory management across 50+ countries",
      solution: "Built AI-powered recommendation engine and demand forecasting system with multi-market adaptation",
      results: [
        "35% increase in conversion rates",
        "45% reduction in inventory costs",
        "28% boost in customer satisfaction",
        "$1.8B in incremental revenue"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      duration: "15 months",
      investment: "$1.8M"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "TechCorp Industries",
      content: "Their AI portfolio consulting transformed our entire product strategy. The level of expertise and strategic thinking exceeded our expectations. We saw immediate improvements in performance and gained long-term strategic clarity that positioned us ahead of competitors.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Product Innovation",
      company: "Innovation Labs",
      content: "The team's expertise in AI strategy and implementation is unmatched. They helped us navigate complex technical challenges with ease and delivered results that exceeded our ROI projections by 200%. Truly world-class consulting.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop"
    },
    {
      name: "Emily Watson",
      role: "CEO & Founder",
      company: "DataDriven Solutions",
      content: "Outstanding results! Their AI portfolio optimization increased our ROI by 40% within the first quarter. The strategic insights and implementation excellence made this the best consulting investment we've ever made.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      companyLogo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop"
    }
  ]

  const stats = [
    { number: "150+", label: "Enterprise Clients", icon: Users },
    { number: "$5.2B+", label: "Value Generated", icon: TrendingUp },
    { number: "98%", label: "Client Satisfaction", icon: Award },
    { number: "45%", label: "Avg. ROI Increase", icon: Target }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const AnimatedCounter = ({ number, label, icon: Icon }: { number: string, label: string, icon: any }) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-3">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>
        <motion.h3 
          className="text-3xl md:text-4xl font-bold text-primary mb-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {number}
        </motion.h3>
        <p className="text-gray-600 font-medium">{label}</p>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
        style={{ opacity: headerOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h1 className="text-xl font-bold text-gray-900">AI Portfolio Consulting</h1>
                </div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors font-medium">Home</button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-medium">Services</button>
                <button onClick={() => scrollToSection('case-studies')} className="text-gray-700 hover:text-primary transition-colors font-medium">Case Studies</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors font-medium">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors font-medium">Contact</button>
              </div>
            </nav>

            <div className="hidden md:block">
              <Button 
                onClick={() => scrollToSection('contact')} 
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2.5"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left font-medium">Home</button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left font-medium">Services</button>
              <button onClick={() => scrollToSection('case-studies')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left font-medium">Case Studies</button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left font-medium">About</button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-primary w-full text-left font-medium">Contact</button>
              <div className="px-3 py-2">
                <Button onClick={() => scrollToSection('contact')} className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
            <motion.div
              style={{ y: heroY }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="mb-6 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Trusted by Fortune 500 Companies
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Transform Your Business with 
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent"> Strategic AI</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We help enterprise leaders strategically implement AI solutions, optimize product portfolios, and drive innovation through data-driven insights that deliver measurable ROI.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Your AI Transformation
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('case-studies')}
                  className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  <Play className="mr-3 h-5 w-5" />
                  View Success Stories
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <AnimatedCounter key={index} {...stat} />
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop" 
                    alt="AI Technology Visualization"
                    className="rounded-3xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl"></div>
                </motion.div>
              </div>
              <div className="absolute -top-6 -right-6 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-80 h-80 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
              Premium Services
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Enterprise AI Solutions
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From strategy development to implementation, we provide end-to-end AI consulting 
              services that drive measurable business results for Fortune 500 companies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 border-gray-100 bg-gradient-to-br from-white to-gray-50/50 group-hover:border-primary/20">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl mr-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">{service.title}</CardTitle>
                          <Badge variant="secondary" className="text-sm font-semibold">{service.price}</Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="outline" 
                      className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                      onClick={() => scrollToSection('contact')}
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-32 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
              Success Stories
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Proven Results at Scale
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how we've helped industry leaders transform their businesses 
              with strategic AI implementations that deliver billions in value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white group-hover:border-primary/20">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="bg-white/90 text-gray-900 mb-2">{study.industry}</Badge>
                      <div className="flex justify-between text-white text-sm">
                        <span>{study.duration}</span>
                        <span>{study.investment}</span>
                      </div>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors">{study.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit mb-4 text-sm">{study.client}</Badge>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      <strong className="text-gray-900">Challenge:</strong> {study.challenge}
                    </CardDescription>
                    <CardDescription className="text-gray-600 mt-3 leading-relaxed">
                      <strong className="text-gray-900">Solution:</strong> {study.solution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 text-lg">Key Results:</h4>
                      <ul className="space-y-3">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                            <span className="font-medium">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
              Client Testimonials
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              What Industry Leaders Say
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Don't just take our word for it. Here's what C-suite executives say about 
              our transformational AI consulting services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50/50 hover:shadow-2xl transition-all duration-500 group-hover:border-primary/20">
                  <CardContent className="p-8">
                    <div className="flex mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full mr-4 border-2 border-gray-100"
                        />
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                          <p className="text-gray-600 font-medium">{testimonial.role}</p>
                          <p className="text-gray-500">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
                About Our Firm
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
                Leading AI Innovation Since 2018
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are a premier team of AI strategists, data scientists, and technology experts 
                dedicated to helping Fortune 500 companies harness the transformative power of artificial intelligence. 
                With over 150 successful implementations across various industries, we bring 
                deep expertise and proven methodologies to every engagement.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our consultants have previously led AI initiatives at Google, Microsoft, Amazon, and other 
                technology leaders, bringing world-class expertise to your organization.
              </p>
              
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Partner With Us
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                  alt="Our Expert Team"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl"></div>
              </motion.div>
              <div className="absolute -top-6 -right-6 w-80 h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Let's discuss how our AI portfolio consulting services can help you 
              achieve your strategic objectives and drive innovation at enterprise scale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-2xl border-gray-100">
                <CardHeader className="pb-6">
                  <CardTitle className="text-2xl">Schedule Your Consultation</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and our senior consultants will get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">First Name</label>
                      <Input placeholder="John" className="h-12" />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-3 block">Last Name</label>
                      <Input placeholder="Doe" className="h-12" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">Business Email</label>
                    <Input type="email" placeholder="john@company.com" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">Company</label>
                    <Input placeholder="Your Company" className="h-12" />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">Project Budget Range</label>
                    <select className="w-full h-12 px-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                      <option>$50K - $100K</option>
                      <option>$100K - $500K</option>
                      <option>$500K - $1M</option>
                      <option>$1M+</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-3 block">Project Details</label>
                    <Textarea 
                      placeholder="Tell us about your AI portfolio consulting needs and strategic objectives..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white h-12 text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="p-3 bg-primary/10 rounded-xl mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">contact@aiportfolioconsulting.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 bg-primary/10 rounded-xl mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="p-3 bg-primary/10 rounded-xl mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Headquarters</p>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="w-12 h-12 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-12 h-12 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="w-12 h-12 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-slate-100 p-8 rounded-2xl">
                <h4 className="font-bold text-gray-900 mb-6 text-xl">Office Hours</h4>
                <div className="space-y-4 text-gray-600">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">AI Portfolio Consulting</h3>
              </div>
              <p className="text-gray-400 mb-6 max-w-md text-lg leading-relaxed">
                Transforming Fortune 500 businesses through strategic AI implementation and 
                portfolio optimization. Your trusted partner in enterprise AI innovation.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-primary/20 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-primary/20 transition-all duration-300">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-primary/20 transition-all duration-300">
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors font-medium">AI Strategy</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Portfolio Optimization</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Risk Assessment</a></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Innovation Acceleration</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-lg">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors font-medium">About</button></li>
                <li><button onClick={() => scrollToSection('case-studies')} className="hover:text-white transition-colors font-medium">Case Studies</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors font-medium">Contact</button></li>
                <li><a href="#" className="hover:text-white transition-colors font-medium">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 AI Portfolio Consulting. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App