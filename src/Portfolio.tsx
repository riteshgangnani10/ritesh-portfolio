import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ArrowRight, 
  Terminal, 
  Zap, 
  Users, 
  Award, 
  Code, 
  Briefcase, 
  Download,
  ChevronDown,
  Star,
  TrendingUp,
  Database,
  Cloud,
  Cpu,
  Calendar,
  MapPin,
  Phone,
  Menu,
  X
} from 'lucide-react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            let start = 0;
            const increment = end / (duration / 16);
            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                setCount(end);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        },
        { threshold: 0.3 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    return <span ref={ref}>{count}{suffix}</span>;
  };

  const FadeInSection: React.FC<FadeInSectionProps> = ({ children, delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [delay]);

    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {children}
      </div>
    );
  };

  const techStack = [
    { name: 'PyTorch', category: 'ML Framework' },
    { name: 'TensorFlow', category: 'ML Framework' },
    { name: 'Transformers', category: 'ML Framework' },
    { name: 'FastAPI', category: 'Backend' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'GCP', category: 'Cloud' },
    { name: 'TensorRT', category: 'Optimization' },
    { name: 'CUDA', category: 'GPU Computing' },
    { name: 'Python', category: 'Language' },
    { name: 'C++', category: 'Language' }
  ];

  const projects = [
    {
      title: "Segmind GenAI Platform",
      description: "Leading AI platform with 250+ production APIs serving millions of requests for fashion and e-commerce applications",
      tech: ["PyTorch", "FastAPI", "Docker", "AWS", "TensorRT"],
      highlights: ["250+ APIs deployed", "Millions of requests handled", "Production-scale AI systems"],
      link: "https://www.segmind.com",
      type: "Production Platform"
    },
    {
      title: "VoltaML Optimization Library",
      description: "Open-source library achieving 4-6x performance improvements for Stable Diffusion and other generative models",
      tech: ["TensorRT", "CUDA", "ONNX", "PyTorch"],
      highlights: ["4-6x performance gains", "1.2K+ GitHub stars", "Real-time inference"],
      link: "https://github.com/VoltaML",
      type: "Open Source"
    },
    {
      title: "Advanced LoRA Training System",
      description: "Sophisticated Low-Rank Adaptation training pipeline for character-consistent image generation with custom datasets",
      tech: ["Stable Diffusion", "LoRA", "PyTorch", "CUDA", "Kohya"],
      highlights: ["Character consistency across poses", "Custom dataset optimization", "Multi-GPU training pipeline"],
      link: "#",
      type: "ML Training"
    },
    {
      title: "Character Boarding Pipeline",
      description: "End-to-end character development system for consistent AI-generated character creation across multiple scenes and poses",
      tech: ["SDXL", "ControlNet", "Face Restoration", "ComfyUI"],
      highlights: ["Consistent character generation", "Multi-pose adaptation", "Style transfer capabilities"],
      link: "#",
      type: "GenAI Application"
    },
    {
      title: "Face Swap & Enhancement Suite",
      description: "Production-ready face swapping system with advanced restoration using GANs and super-resolution models",
      tech: ["GANs", "InsightFace", "GFPGAN", "CodeFormer", "OpenCV"],
      highlights: ["Real-time face swapping", "4K upscaling capability", "Medical-grade accuracy"],
      link: "#",
      type: "Computer Vision"
    },
    {
      title: "Custom Diffusion Model Training",
      description: "Specialized training infrastructure for fine-tuning diffusion models on domain-specific datasets with advanced optimization",
      tech: ["Diffusers", "PyTorch", "Transformers", "DreamBooth", "Textual Inversion"],
      highlights: ["Domain-specific fine-tuning", "Memory-efficient training", "Automated hyperparameter optimization"],
      link: "#",
      type: "ML Infrastructure"
    }
  ];

  const achievements = [
    {
      title: "Production AI Expert",
      description: "Successfully deployed 250+ GenAI APIs in production environments",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Open Source Contributor",
      description: "VoltaML library gained 1.2K+ GitHub stars and widespread adoption",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Performance Optimization",
      description: "Achieved 4-6x performance improvements in AI model inference",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Industry Leadership",
      description: "Head of AI at Segmind, leading cutting-edge AI development",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gray-900 tracking-tight">
              Ritesh Gangnani
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`text-sm font-medium transition-all duration-300 hover:text-gray-900 ${
                    activeSection === item 
                      ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                      : 'text-gray-500'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://github.com/riteshgangnani10" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/riteshgangnani" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#contact" className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-gray-800 hover:to-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Hire Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4 mt-4">
                {['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
                <div className="flex space-x-4 pt-4">
                  <a href="https://github.com/riteshgangnani10" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/riteshgangnani" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <FadeInSection>
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 rounded-full text-gray-700 text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Available for new opportunities
              </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                AI Workflow
              </span>
              <br />
              <span className="text-gray-500">Architect</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              I build and automate AI workflows from <span className="text-gray-900 font-semibold">ideation to production at scale</span>.<br />
              <span className="text-gray-900 font-medium">6+ years • 250+ APIs • Custom model training • 4-6x performance gains</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <a href="#contact" className="group bg-gray-900 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 flex items-center shadow-lg">
                Let's collaborate
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#projects" className="px-8 py-4 border-2 border-gray-300 rounded-xl font-medium hover:border-gray-900 hover:bg-gray-50 transition-all duration-300">
                View my work
              </a>
              <a 
                href="/Ritesh_Gangnani_Resume.pdf" 
                download="Ritesh_Gangnani_Resume.pdf"
                className="flex items-center px-6 py-4 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </a>
            </div>

            <div className="animate-bounce">
              <ChevronDown className="w-6 h-6 text-gray-400 mx-auto" />
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                About Me
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Turning AI possibilities into production realities
              </p>
            </div>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInSection delay={200}>
              <div className="space-y-8">
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    I'm a <strong className="text-gray-900">Production AI Expert</strong> with 6+ years of experience building AI systems that actually work at scale. My passion lies in bridging the gap between cutting-edge research and real-world applications.
                  </p>
                  <p>
                    Currently serving as <strong className="text-gray-900">Head of AI at Segmind</strong>, I've architected and deployed 250+ GenAI APIs that serve millions of requests. I'm also the co-creator of <strong className="text-gray-900">VoltaML</strong>, an optimization library that makes AI models run 4-6x faster.
                  </p>
                  <p>
                    My expertise spans the entire AI pipeline: from research and development to optimization, deployment, and scaling. I specialize in <strong className="text-gray-900">model training, generative AI, and production optimization</strong> with deep experience in custom dataset creation and distributed training.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {['AI Architecture', 'Production Systems', 'Performance Optimization', 'Team Leadership'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <Terminal className="w-12 h-12 text-gray-900 mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={250} suffix="+" />
                  </div>
                  <div className="text-gray-600">APIs Deployed</div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <Zap className="w-12 h-12 text-gray-900 mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">4-6x</div>
                  <div className="text-gray-600">Performance Gains</div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <Users className="w-12 h-12 text-gray-900 mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    <AnimatedCounter end={1.2} suffix="K+" />
                  </div>
                  <div className="text-gray-600">GitHub Stars</div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <Award className="w-12 h-12 text-gray-900 mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">6+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Experience
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Building the future of AI, one production system at a time
              </p>
            </div>
          </FadeInSection>

          <div className="space-y-12">
            {/* Segmind */}
            <FadeInSection delay={200}>
              <div className="group relative">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <Briefcase className="w-6 h-6 text-gray-900 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">Head of AI</h3>
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="text-xl text-gray-700 font-semibold">Segmind</span>
                        <span className="ml-4 text-gray-500">Feb 2023 – Present</span>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">
                        Leading AI development for a production GenAI platform serving millions of requests across fashion and e-commerce industries. Specialized in training and fine-tuning large-scale models.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['PyTorch', 'Transformers', 'FastAPI', 'Docker', 'AWS', 'TensorRT', 'CUDA'].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <a href="https://www.segmind.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Led development and deployment of 250+ GenAI APIs in production environments
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Trained and fine-tuned custom diffusion models, LoRA adapters, and transformer architectures
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Architected virtual try-on, interior design, and AI product photography systems
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Scaled infrastructure using TensorRT, ComfyUI, and containerization technologies
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Developed advanced workflows leveraging SDXL, Flux/Redux, and GPT models
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* VoltaML */}
            <FadeInSection delay={400}>
              <div className="group relative">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <Code className="w-6 h-6 text-gray-900 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">Co-Creator & Lead Developer</h3>
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="text-xl text-gray-700 font-semibold">VoltaML</span>
                        <span className="ml-4 text-gray-500">Apr 2022 – Mar 2023</span>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">
                        Co-created an open-source optimization library that achieved 4-6x performance improvements for Stable Diffusion and other generative models.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['TensorRT', 'CUDA', 'ONNX', 'PyTorch', 'TorchScript', 'Model Training'].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-500">
                        <Star className="w-4 h-4 mr-1" />
                        <span className="text-sm">1.2K+ stars</span>
                      </div>
                      <a href="https://github.com/VoltaML" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Engineered core optimizations using TensorRT, TorchScript, and CUDA kernels
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Developed custom training pipelines for model optimization and quantization
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Achieved 4-6x performance improvements for resource-intensive generative models
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Gained 1.2K+ GitHub stars and became foundational to multiple production systems
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Enabled real-time inference for previously computationally prohibitive models
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            {/* Onward Assist */}
            <FadeInSection delay={600}>
              <div className="group relative">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <Terminal className="w-6 h-6 text-gray-900 mr-3" />
                        <h3 className="text-2xl font-bold text-gray-900">Machine Learning Scientist → ML Manager</h3>
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="text-xl text-gray-700 font-semibold">Onward Assist</span>
                        <span className="ml-4 text-gray-500">Oct 2019 – Jan 2023</span>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">
                        Built end-to-end computer vision pipelines for histopathology AI applications. Promoted to ML Manager (2020) leading technical teams and client-facing medical AI tools.
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {['GANs', 'U-Net', 'ResNet', 'CNNs', 'Docker', 'Kubernetes', 'Medical AI', 'Computer Vision'].map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-gray-500 text-sm">Hyderabad, India</span>
                    </div>
                  </div>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Developed comprehensive CV architecture using GANs, U-Net, ResNet, and CNNs for medical image analysis
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Built stain normalization algorithms, advanced image segmentation models, and tumor classification systems
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Deployed production-ready medical AI tools using Docker & Kubernetes, integrated into clinical trial workflows
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Promoted to ML Manager (2020) - led technical team and collaborated directly with pathologists
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Delivered enterprise solutions for Telepath Dx and GE Healthcare, presented at HIMSS 2022
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gradient-to-br from-blue-50/20 via-gray-50 to-purple-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Transforming ideas into production-ready AI solutions
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <FadeInSection key={project.title} delay={index * 200}>
                <div className="group bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-gray-300 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm font-medium mb-3">
                        {project.type}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                    </div>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-gray-100 rounded-full text-gray-700 text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
                          <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Technical Expertise
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  End-to-end AI development from model training to production deployment
                </p>
              </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <FadeInSection delay={200}>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Database className="w-12 h-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Generative AI</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>SDXL, Flux, ControlNet</li>
                  <li>LoRA, Inpainting</li>
                  <li>ComfyUI, Diffusers</li>
                  <li>GPT Integration</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={400}>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Cpu className="w-12 h-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Optimization</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>TensorRT, VoltaML</li>
                  <li>TorchScript, ONNX</li>
                  <li>CUDA, xformers</li>
                  <li>Triton Inference</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Cloud className="w-12 h-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Docker, Kubernetes</li>
                  <li>FastAPI, REST APIs</li>
                  <li>AWS, GCP, RunPod</li>
                  <li>Production Scaling</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={800}>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow">
                <Terminal className="w-12 h-12 text-gray-900 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Model Training</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Custom Dataset Creation</li>
                  <li>Fine-tuning & LoRA</li>
                  <li>Distributed Training</li>
                  <li>Model Evaluation</li>
                </ul>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={1000}>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Stack</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {techStack.map((tech, index) => (
                  <div key={tech.name} className="group relative">
                    <span className="inline-block px-4 py-2 bg-white rounded-full text-gray-700 font-medium border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all duration-300">
                      {tech.name}
                    </span>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      {tech.category}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Key Achievements
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Milestones that define my journey in AI
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <FadeInSection key={achievement.title} delay={index * 200}>
                <div className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-900">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Let's Build the Future
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Ready to transform your AI vision into production reality?<br />
              I'm available for consulting, full-time roles, and exciting projects.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-6 mb-16">
              <a 
                href="https://calendly.com/ritesh-gangnani/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 flex items-center shadow-lg"
              >
                <Calendar className="w-5 h-5 mr-3" />
                Schedule a Call
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ritesh.gangnani@gmail.com&su=Portfolio%20Contact&body=Hi%20Ritesh,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-gray-900 border-2 border-gray-900 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white hover:scale-105 flex items-center shadow-lg"
              >
                <Mail className="w-5 h-5 mr-3" />
                Email Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/riteshgangnani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 border-2 border-gray-300 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href="https://github.com/riteshgangnani10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-14 h-14 border-2 border-gray-300 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all duration-300"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="tel:+917503214123" 
                  className="w-14 h-14 border-2 border-gray-300 rounded-xl flex items-center justify-center text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-500" />
                      <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=ritesh.gangnani@gmail.com&su=Portfolio%20Contact"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                      >
                        ritesh.gangnani@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-500" />
                      <a href="tel:+917503214123" className="text-gray-600 hover:text-gray-900 transition-colors">
                        +91-7503214123
                      </a>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-600">New Delhi, India</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-gray-600">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <Zap className="w-5 h-5 mr-2" />
                    <span>Open to remote work</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start">
                    <Briefcase className="w-5 h-5 mr-2" />
                    <span>Available for consultings</span>
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="flex items-center justify-center md:justify-end">
                    <Calendar className="w-4 h-4 mr-2 text-gray-500" />
                    <span className="text-gray-600">Available immediately</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-lg font-semibold mb-2">Ritesh Gangnani</p>
              <p className="text-gray-400">Production AI Expert • Building the future of AI</p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/riteshgangnani10" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/riteshgangnani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=ritesh.gangnani@gmail.com&su=Portfolio%20Contact"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                title="Email: ritesh.gangnani@gmail.com"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Ritesh Gangnani. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio; 