import { useState, useEffect } from 'react';
import { Search, Layers, Eye, Sparkles, Calendar, Palette } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { loadEarrings } from '../utils/loadEarrings';

interface Artwork {
  filename: string;
  title: string;
  medium: string;
  materials: string;
  dimensions: string;
  artistStatement: string;
  image: string;
  collection: string;
  year: string;
}

export default function Gallery() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [filteredArtworks, setFilteredArtworks] = useState<Artwork[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtworks = async () => {
      try {
        const data = await loadEarrings();
        // Transform product data to artwork data
        const transformedData = data.map((item: any) => ({
          filename: item.filename,
          title: item.name,
          medium: 'Wearable Sculpture',
          materials: item.material,
          dimensions: item.length,
          artistStatement: item.description,
          image: item.image,
          collection: getCollectionFromMaterial(item.material),
          year: '2024'
        }));
        setArtworks(transformedData);
        setFilteredArtworks(transformedData);
      } catch (error) {
        console.error('Error loading artworks:', error);
        // Artistic placeholder data
        const placeholderData: Artwork[] = [
          {
            filename: 'rose_gold_cascade',
            title: 'Cascade of Light',
            medium: 'Wearable Sculpture',
            materials: 'Sterling Silver, Rose Gold, Light',
            dimensions: '2.5" × 0.8"',
            artistStatement: 'An exploration of how precious metals can capture and reflect the ephemeral quality of falling light. Each drop represents a moment suspended in time.',
            image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop',
            collection: 'Luminous Series',
            year: '2024'
          },
          {
            filename: 'ocean_whispers',
            title: 'Ocean Whispers',
            medium: 'Wearable Sculpture',
            materials: 'Sterling Silver, Turquoise, Memory',
            dimensions: '1.8" × 1.2"',
            artistStatement: 'Inspired by the healing power of water, these pieces embody the circular nature of renewal and the ancient wisdom held within natural stones.',
            image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=600&fit=crop',
            collection: 'Elemental Series',
            year: '2024'
          },
          {
            filename: 'garden_pearls',
            title: 'Garden of Pearls',
            medium: 'Wearable Sculpture',
            materials: 'Freshwater Pearls, Gold, Growth',
            dimensions: '0.5" × 0.5"',
            artistStatement: 'A meditation on simplicity and perfection found in nature. These pieces celebrate the quiet beauty of organic forms and natural luster.',
            image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop',
            collection: 'Botanical Series',
            year: '2024'
          },
          {
            filename: 'lavender_dreams',
            title: 'Lavender Dreams',
            medium: 'Wearable Sculpture',
            materials: 'Amethyst, Sterling Silver, Dreams',
            dimensions: '3" × 0.6"',
            artistStatement: 'An exploration of movement and color, where amethyst stones dance like captured dreams, shifting between reality and imagination.',
            image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=600&fit=crop',
            collection: 'Ethereal Series',
            year: '2024'
          },
          {
            filename: 'autumn_spiral',
            title: 'Autumn Spiral',
            medium: 'Wearable Sculpture',
            materials: 'Hammered Copper, Brass, Time',
            dimensions: '2" × 1"',
            artistStatement: 'Hand-forged spirals that capture the essence of seasonal change. The patina develops over time, making each piece a living artwork.',
            image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=500&h=600&fit=crop',
            collection: 'Temporal Series',
            year: '2024'
          },
          {
            filename: 'moonlit_tears',
            title: 'Moonlit Tears',
            medium: 'Wearable Sculpture',
            materials: 'Rainbow Moonstone, Silver Wire, Mystery',
            dimensions: '2.2" × 0.7"',
            artistStatement: 'These pieces explore the relationship between light and stone, where moonstone\'s inner fire creates an ever-changing dialogue with the wearer.',
            image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&h=600&fit=crop',
            collection: 'Celestial Series',
            year: '2024'
          }
        ];
        setArtworks(placeholderData);
        setFilteredArtworks(placeholderData);
      } finally {
        setLoading(false);
      }
    };

    fetchArtworks();
  }, []);

  const getCollectionFromMaterial = (material: string): string => {
    if (material.toLowerCase().includes('gold')) return 'Luminous Series';
    if (material.toLowerCase().includes('turquoise') || material.toLowerCase().includes('coral')) return 'Elemental Series';
    if (material.toLowerCase().includes('pearl')) return 'Botanical Series';
    if (material.toLowerCase().includes('amethyst') || material.toLowerCase().includes('moonstone')) return 'Ethereal Series';
    if (material.toLowerCase().includes('copper')) return 'Temporal Series';
    return 'Mixed Media';
  };

  useEffect(() => {
    let filtered = artworks;

    if (searchTerm) {
      filtered = filtered.filter(artwork =>
        artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artwork.materials.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artwork.artistStatement.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artwork.collection.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCollection !== 'all') {
      filtered = filtered.filter(artwork =>
        artwork.collection === selectedCollection
      );
    }

    setFilteredArtworks(filtered);
  }, [searchTerm, selectedCollection, artworks]);

  const collections = ['all', ...new Set(artworks.map(a => a.collection))];

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="inline-flex items-center space-x-3 text-slate-600">
            <Palette className="w-6 h-6 animate-pulse" />
            <span className="text-lg">Curating artistic collection...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Portfolio Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-slate-800 mb-6">Portfolio</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          A curated collection of wearable sculptures that explore the intersection of healing, 
          nature, and artistic expression. Each piece represents a moment of creative meditation.
        </p>
      </div>

      {/* Search and Collection Filter */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input
            placeholder="Search artworks, materials, or collections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 h-12 bg-white/80 backdrop-blur-sm border-slate-200 focus:border-slate-400 text-base"
          />
        </div>
        
        <div className="flex items-center space-x-3">
          <Layers className="w-5 h-5 text-slate-500" />
          <div className="flex flex-wrap gap-2">
            {collections.slice(0, 4).map((collection) => (
              <Button
                key={collection}
                variant={selectedCollection === collection ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCollection(collection)}
                className="capitalize font-medium"
              >
                {collection === 'all' ? 'All Works' : collection}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Collection Info */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-600">
            {filteredArtworks.length} {filteredArtworks.length === 1 ? 'artwork' : 'artworks'} 
            {selectedCollection !== 'all' && ` in ${selectedCollection}`}
          </p>
          <div className="flex items-center space-x-2 text-xs text-slate-500">
            <Calendar className="w-4 h-4" />
            <span>Current Exhibition: 2024</span>
          </div>
        </div>
      </div>

      {/* Artwork Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {filteredArtworks.map((artwork) => (
          <Card key={artwork.filename} className="group overflow-hidden bg-white/90 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <Eye className="w-5 h-5 text-slate-600" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Badge variant="secondary" className="bg-white/90 text-slate-700 backdrop-blur-sm">
                  {artwork.year}
                </Badge>
              </div>
            </div>
            
            <CardContent className="p-8">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-slate-600 transition-colors">
                  {artwork.title}
                </h3>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-medium mb-3">
                  {artwork.medium}
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                    Materials
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {artwork.materials}
                  </p>
                </div>
                
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                    Dimensions
                  </p>
                  <p className="text-sm text-slate-700">
                    {artwork.dimensions}
                  </p>
                </div>

                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-2">
                    Artist Statement
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    {artwork.artistStatement}
                  </p>
                </div>

                <div className="pt-2">
                  <Badge variant="outline" className="border-slate-300 text-slate-600 text-xs">
                    {artwork.collection}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredArtworks.length === 0 && (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <Search className="w-10 h-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-medium text-slate-800 mb-3">No artworks found</h3>
          <p className="text-slate-600 mb-6 max-w-md mx-auto">
            Try adjusting your search terms or explore different collections to discover more pieces.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchTerm('');
              setSelectedCollection('all');
            }}
            className="font-medium"
          >
            View All Artworks
          </Button>
        </div>
      )}

      {/* Collection Note */}
      <div className="mt-20 text-center">
        <div className="max-w-2xl mx-auto bg-slate-50/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200">
          <Sparkles className="w-8 h-8 text-slate-600 mx-auto mb-4" />
          <p className="text-sm text-slate-600 leading-relaxed italic">
            "Each piece in this collection represents a dialogue between my hands and the materials, 
            a conversation that happens in the quiet moments between healing others and creating beauty. 
            These are not just accessories—they are wearable meditations on the intersection of art and life."
          </p>
          <p className="text-xs text-slate-500 mt-4 font-medium">— Gina Adorna</p>
        </div>
      </div>
    </div>
  );
}
