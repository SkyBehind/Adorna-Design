import { useState } from 'react';
import { Droplets, Leaf, Heart, Sparkles, Search, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  type: 'soap' | 'lip-balm';
  scent: string;
  ingredients: string[];
  benefits: string;
  description: string;
  image: string;
  collection: string;
}

export default function LippieAndLather() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | 'soap' | 'lip-balm'>('all');

  // Sample product data - would come from data source
  const products: Product[] = [
    {
      id: 'lavender-dreams-soap',
      name: 'Lavender Dreams',
      type: 'soap',
      scent: 'Lavender & Chamomile',
      ingredients: ['Olive Oil', 'Coconut Oil', 'Lavender Essential Oil', 'Chamomile', 'Shea Butter'],
      benefits: 'Calming and moisturizing, perfect for sensitive skin',
      description: 'Hand-poured with organic lavender from local farms, this gentle soap brings the tranquility of a summer garden to your daily routine.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=600&fit=crop',
      collection: 'Botanical Bliss'
    },
    {
      id: 'citrus-burst-soap',
      name: 'Citrus Burst',
      type: 'soap',
      scent: 'Orange & Lemongrass',
      ingredients: ['Coconut Oil', 'Palm Oil', 'Orange Essential Oil', 'Lemongrass', 'Vitamin E'],
      benefits: 'Energizing and cleansing, great for morning routines',
      description: 'Bright and invigorating, this soap awakens the senses with fresh citrus oils and natural exfoliating properties.',
      image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500&h=600&fit=crop',
      collection: 'Energizing Essentials'
    },
    {
      id: 'vanilla-honey-balm',
      name: 'Vanilla Honey',
      type: 'lip-balm',
      scent: 'Vanilla & Raw Honey',
      ingredients: ['Beeswax', 'Coconut Oil', 'Shea Butter', 'Vanilla Extract', 'Raw Honey'],
      benefits: 'Deep moisturizing and naturally sweet',
      description: 'Luxuriously smooth with the comforting scent of vanilla and the healing properties of raw honey.',
      image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&h=600&fit=crop',
      collection: 'Sweet Comfort'
    },
    {
      id: 'peppermint-fresh-balm',
      name: 'Peppermint Fresh',
      type: 'lip-balm',
      scent: 'Peppermint & Eucalyptus',
      ingredients: ['Beeswax', 'Jojoba Oil', 'Peppermint Essential Oil', 'Eucalyptus', 'Vitamin E'],
      benefits: 'Cooling and refreshing, perfect for dry lips',
      description: 'A cooling blend that provides instant relief and long-lasting moisture with a refreshing tingle.',
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=600&fit=crop',
      collection: 'Fresh & Clean'
    },
    {
      id: 'rose-garden-soap',
      name: 'Rose Garden',
      type: 'soap',
      scent: 'Rose & Geranium',
      ingredients: ['Olive Oil', 'Rose Hip Oil', 'Rose Essential Oil', 'Geranium', 'Pink Clay'],
      benefits: 'Anti-aging and deeply nourishing',
      description: 'Infused with rose petals and pink clay, this luxurious soap provides gentle exfoliation and romantic fragrance.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop',
      collection: 'Floral Romance'
    },
    {
      id: 'coconut-lime-balm',
      name: 'Coconut Lime',
      type: 'lip-balm',
      scent: 'Coconut & Lime',
      ingredients: ['Coconut Oil', 'Beeswax', 'Lime Essential Oil', 'Coconut Butter', 'Aloe Vera'],
      benefits: 'Tropical moisture with SPF protection',
      description: 'Transport yourself to a tropical paradise with this creamy, protective balm that smells like vacation.',
      image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=500&h=600&fit=crop',
      collection: 'Tropical Escape'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.scent.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === 'all' || product.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Lippie & Lather Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-50 to-emerald-50 rounded-full px-8 py-4 mb-8 border border-teal-200 shadow-sm">
          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-full flex items-center justify-center">
            <Droplets className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-700 to-emerald-600 bg-clip-text text-transparent">
              Lippie & Lather
            </h2>
            <p className="text-sm text-teal-600 font-medium">Botanical Skincare Collection</p>
          </div>
        </div>
        
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Handcrafted soaps and lip balms made with love, botanical ingredients, and the same healing 
          intention that flows through all of Gina's work. Each product is a small act of self-care, 
          created to nourish both body and spirit.
        </p>

        <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
          <div className="flex items-center space-x-2">
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>All Natural Ingredients</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4 text-rose-500" />
            <span>Made with Healing Intention</span>
          </div>
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Small Batch Crafted</span>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            placeholder="Search by name, scent, or ingredients..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-12 bg-white/80 backdrop-blur-sm border-slate-200 focus:border-teal-400 text-base"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <Filter className="w-5 h-5 text-slate-500" />
          <div className="flex gap-2">
            <Button
              variant={selectedType === 'all' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType('all')}
              className="font-medium"
            >
              All Products
            </Button>
            <Button
              variant={selectedType === 'soap' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType('soap')}
              className="font-medium"
            >
              Soaps
            </Button>
            <Button
              variant={selectedType === 'lip-balm' ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedType('lip-balm')}
              className="font-medium"
            >
              Lip Balms
            </Button>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="group overflow-hidden bg-white/90 backdrop-blur-sm border-slate-200 hover:border-teal-300 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 left-4">
                <Badge 
                  variant="secondary" 
                  className={`${product.type === 'soap' ? 'bg-teal-100 text-teal-700' : 'bg-rose-100 text-rose-700'} backdrop-blur-sm`}
                >
                  {product.type === 'soap' ? 'Soap' : 'Lip Balm'}
                </Badge>
              </div>
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Badge variant="outline" className="bg-white/90 text-slate-700 backdrop-blur-sm border-white/50">
                  {product.collection}
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-teal-700 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-slate-600 font-medium mb-3">
                  {product.scent}
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-2">
                    Key Ingredients
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {product.ingredients.slice(0, 3).map((ingredient, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-slate-300 text-slate-600">
                        {ingredient}
                      </Badge>
                    ))}
                    {product.ingredients.length > 3 && (
                      <Badge variant="outline" className="text-xs border-slate-300 text-slate-500">
                        +{product.ingredients.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                    Benefits
                  </p>
                  <p className="text-sm text-emerald-700 font-medium">
                    {product.benefits}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-2">
                    Description
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-teal-600" />
          </div>
          <h3 className="text-xl font-medium text-slate-800 mb-3">No products found</h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Try adjusting your search terms or browse all products to discover our botanical skincare collection.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedType('all');
            }}
            className="font-medium"
          >
            View All Products
          </Button>
        </div>
      )}

      {/* Lippie & Lather Philosophy */}
      <div className="mt-20">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-teal-50 to-emerald-50 rounded-3xl p-10 border border-teal-200">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-light text-slate-800 mb-6">The Lippie & Lather Philosophy</h3>
            <p className="text-slate-700 leading-relaxed mb-6">
              "Just as I've spent decades caring for others' bodies in the ICU, these products are created 
              with the same intention of healing and nurturing. Every ingredient is chosen for its beneficial 
              properties, every scent designed to uplift the spirit."
            </p>
            <p className="text-sm text-slate-600 italic">
              Each bar of soap and tube of lip balm is hand-poured in small batches, ensuring quality 
              and freshness while maintaining the personal touch that makes Lippie & Lather special.
            </p>
            <p className="text-xs text-slate-500 mt-4 font-medium">— Gina Stransky</p>
          </div>
        </div>
      </div>
    </div>
  );
}
