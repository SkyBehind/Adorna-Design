import { useState } from 'react';
import { Palette, Home, Flower, Lightbulb, Hammer, TreePine, Search, Grid } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Craft {
  id: string;
  title: string;
  category: 'stained-glass' | 'furniture' | 'landscape' | 'interior' | 'plants';
  description: string;
  materials: string[];
  techniques: string[];
  image: string;
  featured: boolean;
  artistNote: string;
}

export default function OtherCrafts() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Sample craft data - would come from data source
  const crafts: Craft[] = [
    {
      id: 'botanical-window-panel',
      title: 'Botanical Window Panel',
      category: 'stained-glass',
      description: 'A stunning stained glass panel featuring native wildflowers in vibrant blues and greens, designed to catch morning light.',
      materials: ['Cathedral Glass', 'Opalescent Glass', 'Lead Came', 'Copper Foil'],
      techniques: ['Traditional Lead Came', 'Copper Foil Method', 'Acid Etching'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop',
      featured: true,
      artistNote: 'This piece was inspired by the wildflower meadow behind my studio, where I often walk to clear my mind between projects.'
    },
    {
      id: 'healing-garden-table',
      title: 'Healing Garden Table',
      category: 'furniture',
      description: 'A custom dining table crafted from reclaimed barn wood with live edge details and hand-forged iron legs.',
      materials: ['Reclaimed Barn Wood', 'Hand-forged Iron', 'Natural Tung Oil', 'Beeswax'],
      techniques: ['Live Edge Preservation', 'Blacksmithing', 'Traditional Joinery'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=600&fit=crop',
      featured: true,
      artistNote: 'Every piece of reclaimed wood tells a story. This table honors the history of the barn while creating new memories for families.'
    },
    {
      id: 'meditation-garden-design',
      title: 'Meditation Garden Design',
      category: 'landscape',
      description: 'A serene landscape design featuring native plants, natural stone pathways, and a central water feature for contemplation.',
      materials: ['Native Perennials', 'Natural Stone', 'Reclaimed Wood', 'Copper Water Feature'],
      techniques: ['Permaculture Principles', 'Native Plant Selection', 'Natural Stone Placement'],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=600&fit=crop',
      featured: false,
      artistNote: 'Gardens should be places of healing. This design creates a sanctuary where visitors can reconnect with nature and themselves.'
    },
    {
      id: 'therapeutic-plant-collection',
      title: 'Therapeutic Plant Collection',
      category: 'plants',
      description: 'Carefully curated collection of air-purifying and aromatherapy plants, each chosen for their healing properties.',
      materials: ['Lavender', 'Snake Plants', 'Peace Lilies', 'Eucalyptus', 'Handmade Ceramic Pots'],
      techniques: ['Organic Growing', 'Companion Planting', 'Natural Pest Management'],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=600&fit=crop',
      featured: false,
      artistNote: 'Plants are natural healers. Each one in this collection was chosen for its ability to purify air and calm the spirit.'
    },
    {
      id: 'sunrise-mandala-window',
      title: 'Sunrise Mandala Window',
      category: 'stained-glass',
      description: 'A circular stained glass mandala featuring warm sunrise colors, designed to bring positive energy into any space.',
      materials: ['Art Glass', 'Dichroic Glass', 'Zinc Came', 'Protective Coating'],
      techniques: ['Geometric Design', 'Color Theory', 'Precision Cutting'],
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=600&fit=crop',
      featured: true,
      artistNote: 'Mandalas represent wholeness and healing. This piece captures the hope and renewal that comes with each sunrise.'
    },
    {
      id: 'zen-interior-space',
      title: 'Zen Interior Space',
      category: 'interior',
      description: 'A complete interior design transformation focusing on natural materials, calming colors, and mindful space planning.',
      materials: ['Bamboo Flooring', 'Natural Linen', 'Stone Accents', 'Handcrafted Ceramics'],
      techniques: ['Feng Shui Principles', 'Natural Light Optimization', 'Minimalist Design'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=600&fit=crop',
      featured: false,
      artistNote: 'Spaces should nurture the soul. This design creates a sanctuary for rest and reflection in our busy world.'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Crafts', icon: Grid },
    { value: 'stained-glass', label: 'Stained Glass', icon: Lightbulb },
    { value: 'furniture', label: 'Furniture', icon: Hammer },
    { value: 'landscape', label: 'Landscape Design', icon: TreePine },
    { value: 'interior', label: 'Interior Design', icon: Home },
    { value: 'plants', label: 'Plants & Gardens', icon: Flower }
  ];

  const filteredCrafts = crafts.filter(craft => {
    const matchesSearch = craft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         craft.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         craft.materials.some(material => material.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || craft.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredCrafts = filteredCrafts.filter(craft => craft.featured);
  const otherCrafts = filteredCrafts.filter(craft => !craft.featured);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-slate-800 mb-6">Other Crafts & Creations</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Beyond jewelry and skincare, Gina's artistic vision extends into multiple mediums—
          from luminous stained glass to custom furniture, from healing garden designs to 
          therapeutic plant collections. Each craft reflects the same intention: to create 
          beauty that nurtures both space and spirit.
        </p>
      </div>

      {/* Search and Category Filter */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            placeholder="Search crafts, materials, or techniques..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-12 bg-white/80 backdrop-blur-sm border-slate-200 focus:border-slate-400 text-base"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="font-medium"
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Featured Crafts */}
      {featuredCrafts.length > 0 && (
        <div className="mb-16">
          <h3 className="text-2xl font-light text-slate-800 mb-8 text-center">Featured Works</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {featuredCrafts.map((craft) => (
              <Card key={craft.id} className="group overflow-hidden bg-white/90 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img
                    src={craft.image}
                    alt={craft.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-amber-100 text-amber-700 backdrop-blur-sm">
                      Featured
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-slate-800 mb-3 group-hover:text-slate-600 transition-colors">
                      {craft.title}
                    </h3>
                    <Badge variant="outline" className="border-slate-300 text-slate-600 text-sm mb-4">
                      {categories.find(c => c.value === craft.category)?.label}
                    </Badge>
                    <p className="text-slate-700 leading-relaxed">
                      {craft.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-2">
                        Materials & Techniques
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {[...craft.materials, ...craft.techniques].slice(0, 4).map((item, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-slate-300 text-slate-600">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-2">
                        Artist Note
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed italic">
                        {craft.artistNote}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Other Crafts */}
      {otherCrafts.length > 0 && (
        <div>
          {featuredCrafts.length > 0 && (
            <h3 className="text-2xl font-light text-slate-800 mb-8 text-center">Additional Works</h3>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherCrafts.map((craft) => (
              <Card key={craft.id} className="group overflow-hidden bg-white/90 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img
                    src={craft.image}
                    alt={craft.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-slate-600 transition-colors">
                      {craft.title}
                    </h3>
                    <Badge variant="outline" className="border-slate-300 text-slate-600 text-xs mb-3">
                      {categories.find(c => c.value === craft.category)?.label}
                    </Badge>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {craft.description}
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                        Key Materials
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {craft.materials.slice(0, 2).map((material, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-slate-300 text-slate-600">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                        Artist Note
                      </p>
                      <p className="text-xs text-slate-600 leading-relaxed italic line-clamp-3">
                        {craft.artistNote}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredCrafts.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Palette className="w-10 h-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-medium text-slate-800 mb-3">No crafts found</h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Try adjusting your search terms or explore different categories to discover more of Gina's diverse artistic work.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
            className="font-medium"
          >
            View All Crafts
          </Button>
        </div>
      )}

      {/* Multi-Media Philosophy */}
      <div className="mt-20">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-50 to-rose-50 rounded-3xl p-10 border border-slate-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-light text-slate-800 mb-6">Multi-Media Artistry</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              "Art doesn't live in just one medium—it flows wherever there's an opportunity to create beauty 
              and meaning. Whether I'm cutting glass, shaping wood, or designing a garden, the same healing 
              intention guides every project. Each medium teaches me something new about the intersection 
              of function and beauty."
            </p>
            <p className="text-sm text-slate-600 italic">
              From the precision required in stained glass to the patience needed for growing plants, 
              every craft informs and enriches the others, creating a holistic approach to artistic expression.
            </p>
            <p className="text-xs text-slate-500 mt-4 font-medium">— Gina Stransky</p>
          </div>
        </div>
      </div>
    </div>
  );
}
