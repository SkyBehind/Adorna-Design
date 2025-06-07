import { Heart, Stethoscope, Palette, Leaf, Clock, Award, Lightbulb, Users, Target, Home, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Artist Portrait Section */}
      <div className="text-center mb-20">
        <div className="relative inline-block mb-10">
          <div className="w-40 h-40 bg-gradient-to-br from-slate-200 to-rose-200 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
            <div className="w-32 h-32 bg-gradient-to-br from-slate-600 to-rose-500 rounded-full flex items-center justify-center">
              <Palette className="w-16 h-16 text-white" />
            </div>
          </div>
          <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full animate-pulse shadow-lg"></div>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-8 tracking-tight">
          Gina Stransky
        </h2>
        
        <p className="text-xl text-slate-600 italic mb-8 font-light">
          "Multidisciplinary Artisan, Former ICU Nurse, Mother of Three"
        </p>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-slate-700 leading-relaxed">
            Where most see the end of a shift, Gina sees the beginning of creation. 
            A former intensive care nurse with over 30 years of clinical experience in high-acuity 
            medical environments, she transforms the intensity of healing work into moments of 
            artistic meditation across multiple mediums—from wearable sculptures to botanical 
            skincare, from luminous stained glass to custom furniture that tells stories.
          </p>
        </div>
      </div>

      {/* Core Identity Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">The Healer</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              30+ years in intensive care, known for attention to detail, calm under pressure, 
              and compassionate care in high-acuity medical environments.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">The Mother</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Mother of three and lifelong maker, balancing the demands of family life 
              with an unwavering commitment to creative expression and artistic growth.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">The Artisan</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Multidisciplinary creator blending technical precision with artistic intuition 
              across jewelry, skincare, furniture, gardens, and architectural enhancements.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Artist Statement */}
      <div className="mb-20">
        <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl p-10 border border-slate-200 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-slate-800 mb-4">Artist Statement</h3>
            <div className="w-16 h-0.5 bg-gradient-to-r from-slate-400 to-rose-400 mx-auto"></div>
          </div>
          
          <div className="prose prose-lg max-w-none text-slate-700">
            <p className="text-lg leading-relaxed mb-6">
              My art emerges from the intersection of multiple worlds: the clinical precision of healthcare, 
              the organic flow of creative expression, and the deep understanding that beauty has healing power. 
              After thirty years of caring for others in their most vulnerable moments, I've learned that healing 
              extends far beyond medicine—it lives in the objects we touch, the spaces we inhabit, and the 
              beauty we surround ourselves with.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              In the ICU, I was known for observing the small things that matter—the subtle changes that 
              could mean everything. This same attention to detail now flows through every piece I create, 
              whether it's the precise curve of an earring, the perfect balance of oils in a lip balm, 
              or the way light moves through a piece of stained glass. Each creation carries the same 
              care and intentionality that defined my nursing practice.
            </p>
            
            <p className="text-lg leading-relaxed">
              Through Adorna Design, I share this vision: that art should not just be beautiful, but should 
              actively contribute to our wellbeing. Every piece is a meditation on transformation—taking 
              raw materials and, with patience and skill, creating something that brings comfort, confidence, 
              and joy. This work is deeply personal, a way of processing the intensity of caring for others 
              while creating beauty that heals in its own quiet way.
            </p>
          </div>
        </div>
      </div>

      {/* Creative Journey Timeline */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-light text-slate-800 mb-6">The Creative Journey</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            From critical care to creative expression—a lifetime of making, building, and transforming
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">The Observer's Eye</h3>
                  <p className="text-sm text-slate-600">Clinical Foundation</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Three decades in intensive care developed an innate ability to observe the small things 
                that matter—a skill that now brings extraordinary attention to detail in every handcrafted piece. 
                The same precision that saved lives now creates beauty.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">The Builder's Spirit</h3>
                  <p className="text-sm text-slate-600">Lifelong Making</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                From custom Roman blinds and hand-dyed furnishings to functional furniture, gardens, 
                and structural home enhancements—a lifetime of creating with hands that understand 
                both form and function, utility and unexpected elegance.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Palette className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">The Color Harmonist</h3>
                  <p className="text-sm text-slate-600">Exceptional Design Vision</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                An exceptional eye for color harmony and design flow guides every creative decision. 
                This intuitive understanding of how elements work together creates pieces that feel 
                both intentional and effortlessly beautiful.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800">The Healing Touch</h3>
                  <p className="text-sm text-slate-600">Adorna Design</p>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Today, as founder of Adorna Design, every small-batch lip balm, natural soap, 
                and one-of-a-kind earring is crafted with the same care, creativity, and precision 
                that defined decades of compassionate nursing practice.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Artistic Philosophy */}
      <div className="bg-gradient-to-br from-slate-50 to-rose-50 rounded-3xl p-10 border border-slate-200 mb-20">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-3 bg-white/70 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-slate-200">
            <Lightbulb className="w-5 h-5 text-slate-600" />
            <span className="text-sm font-medium text-slate-700">Artistic Philosophy</span>
          </div>
          <h3 className="text-3xl font-light text-slate-800 mb-6">The Adorna Design Approach</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Where technical precision meets artistic intuition, creating beauty that heals
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Eye className="w-10 h-10 text-slate-600" />
            </div>
            <h4 className="font-semibold text-slate-800 mb-3 text-lg">Observational Precision</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              The same attention to detail that mattered in critical care now ensures every 
              artistic element serves both beauty and purpose.
            </p>
          </div>
          
          <div>
            <div className="w-20 h-20 bg-gradient-to-br from-green-200 to-green-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Leaf className="w-10 h-10 text-green-600" />
            </div>
            <h4 className="font-semibold text-slate-800 mb-3 text-lg">Natural Materials</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              A deep appreciation for natural materials and practical beauty, honoring the 
              inherent wisdom found in organic forms and processes.
            </p>
          </div>
          
          <div>
            <div className="w-20 h-20 bg-gradient-to-br from-rose-200 to-rose-300 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Target className="w-10 h-10 text-rose-600" />
            </div>
            <h4 className="font-semibold text-slate-800 mb-3 text-lg">Work Done Well</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              The satisfaction of work done well—each piece reflects a commitment to quality 
              and craftsmanship that comes from a lifetime of caring practice.
            </p>
          </div>
        </div>
      </div>

      {/* Recognition & Impact */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
          <CardContent className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Recognition</h3>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">Featured in regional artisan showcases and craft fairs</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">Custom commissions for healthcare facilities and private clients</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">Growing collector base across multiple artistic mediums</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">Lippie & Lather featured in local wellness centers</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-slate-200">
          <CardContent className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800">Community Impact</h3>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">Workshops for healthcare workers on creative healing practices</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">Mentoring emerging artists across multiple craft disciplines</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">Donations to art therapy and wellness programs</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm">Sustainable practices in all artistic mediums</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
