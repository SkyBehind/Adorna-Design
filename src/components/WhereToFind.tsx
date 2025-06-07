import { useState } from 'react';
import { MapPin, Calendar, Clock, Store, Phone, ExternalLink, Navigation } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface MarketSchedule {
  id: string;
  name: string;
  location: string;
  address: string;
  schedule: string;
  nextDate: string;
  time: string;
  description: string;
  website?: string;
  phone?: string;
  status: 'upcoming' | 'regular' | 'seasonal';
}

interface StoreLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  website?: string;
  description: string;
  displayType: string;
  hours: string;
}

export default function WhereToFind() {
  const [activeTab, setActiveTab] = useState<'markets' | 'stores'>('markets');

  // Sample market schedule data - would come from data source
  const marketSchedule: MarketSchedule[] = [
    {
      id: 'downtown-farmers',
      name: 'Downtown Farmers Market',
      location: 'Main Street Plaza',
      address: '123 Main Street, Downtown',
      schedule: 'Every Saturday',
      nextDate: 'January 18, 2025',
      time: '8:00 AM - 2:00 PM',
      description: 'Our flagship market location with the largest selection of jewelry, Lippie & Lather products, and seasonal crafts.',
      website: 'https://downtownfarmersmarket.com',
      phone: '(555) 123-4567',
      status: 'upcoming'
    },
    {
      id: 'riverside-market',
      name: 'Riverside Artisan Market',
      location: 'Riverside Park',
      address: '456 River Road, Riverside',
      schedule: 'First Sunday of each month',
      nextDate: 'February 2, 2025',
      time: '10:00 AM - 4:00 PM',
      description: 'A curated artisan market featuring handmade goods, perfect for discovering unique pieces and custom commissions.',
      website: 'https://riversideartisans.org',
      status: 'regular'
    },
    {
      id: 'spring-festival',
      name: 'Spring Garden Festival',
      location: 'Community Gardens',
      address: '789 Garden Lane, Greenville',
      schedule: 'Annual Spring Event',
      nextDate: 'April 15-16, 2025',
      time: '9:00 AM - 5:00 PM',
      description: 'Special appearance at the annual garden festival, featuring plant collections and garden-inspired jewelry.',
      status: 'seasonal'
    },
    {
      id: 'holiday-bazaar',
      name: 'Holiday Artisan Bazaar',
      location: 'Community Center',
      address: '321 Center Street, Midtown',
      schedule: 'November - December',
      nextDate: 'November 2025',
      time: '10:00 AM - 6:00 PM',
      description: 'Holiday shopping destination with gift sets, custom orders, and limited edition seasonal pieces.',
      status: 'seasonal'
    }
  ];

  // Sample store locations - would come from data source
  const storeLocations: StoreLocation[] = [
    {
      id: 'healing-hands-spa',
      name: 'Healing Hands Spa & Wellness',
      address: '555 Wellness Way, Spa District',
      phone: '(555) 987-6543',
      website: 'https://healinghandsspa.com',
      description: 'Permanent display of Lippie & Lather products and select jewelry pieces in the spa retail area.',
      displayType: 'Lippie & Lather + Select Jewelry',
      hours: 'Mon-Sat 9AM-7PM, Sun 11AM-5PM'
    },
    {
      id: 'artisan-collective',
      name: 'The Artisan Collective',
      address: '888 Creative Commons, Arts District',
      phone: '(555) 456-7890',
      website: 'https://artisancollective.com',
      description: 'Rotating display of jewelry collections and seasonal craft pieces in this cooperative gallery space.',
      displayType: 'Jewelry + Rotating Crafts',
      hours: 'Tue-Sun 10AM-6PM, Closed Mondays'
    },
    {
      id: 'garden-center',
      name: 'Bloom & Grow Garden Center',
      address: '999 Plant Paradise Road, Garden District',
      phone: '(555) 234-5678',
      description: 'Therapeutic plant collections and garden-inspired jewelry available in the gift shop.',
      displayType: 'Plants + Garden Jewelry',
      hours: 'Daily 8AM-6PM'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-light text-slate-800 mb-6">Where to Find Adorna Design</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Connect with Gina and discover her latest creations at farmers markets, artisan shows, 
          and select retail partners. Each location offers a unique opportunity to experience 
          the full range of Adorna Design's handcrafted artistry.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-1 border border-slate-200 shadow-sm">
          <Button
            variant={activeTab === 'markets' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('markets')}
            className="font-medium"
          >
            <Calendar className="w-4 h-4 mr-2" />
            Markets & Events
          </Button>
          <Button
            variant={activeTab === 'stores' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('stores')}
            className="font-medium"
          >
            <Store className="w-4 h-4 mr-2" />
            Retail Partners
          </Button>
        </div>
      </div>

      {/* Markets & Events Tab */}
      {activeTab === 'markets' && (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-slate-800 mb-4">Upcoming Markets & Events</h3>
            <p className="text-slate-600">
              Visit Gina at these upcoming markets to see the latest collections and meet the artist behind the work.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {marketSchedule.map((market) => (
              <Card key={market.id} className="overflow-hidden bg-white/90 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {market.name}
                      </h3>
                      <div className="flex items-center space-x-2 text-slate-600 mb-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{market.location}</span>
                      </div>
                      <p className="text-xs text-slate-500">{market.address}</p>
                    </div>
                    <Badge 
                      variant={market.status === 'upcoming' ? 'default' : 'outline'}
                      className={
                        market.status === 'upcoming' ? 'bg-emerald-100 text-emerald-700' :
                        market.status === 'seasonal' ? 'bg-amber-100 text-amber-700' :
                        'bg-slate-100 text-slate-700'
                      }
                    >
                      {market.status === 'upcoming' ? 'Next Up' : 
                       market.status === 'seasonal' ? 'Seasonal' : 'Regular'}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                          Schedule
                        </p>
                        <p className="text-sm text-slate-700 font-medium">{market.schedule}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                          Hours
                        </p>
                        <p className="text-sm text-slate-700 font-medium">{market.time}</p>
                      </div>
                    </div>

                    {market.nextDate && (
                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                          Next Date
                        </p>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4 text-emerald-600" />
                          <p className="text-sm text-emerald-700 font-semibold">{market.nextDate}</p>
                        </div>
                      </div>
                    )}

                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-2">
                        What to Expect
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {market.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {market.website && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={market.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Website
                          </a>
                        </Button>
                      )}
                      {market.phone && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={`tel:${market.phone}`}>
                            <Phone className="w-3 h-3 mr-1" />
                            {market.phone}
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://maps.google.com/?q=${encodeURIComponent(market.address)}`} target="_blank" rel="noopener noreferrer">
                          <Navigation className="w-3 h-3 mr-1" />
                          Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Retail Partners Tab */}
      {activeTab === 'stores' && (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-light text-slate-800 mb-4">Retail Partners</h3>
            <p className="text-slate-600">
              Find Adorna Design products at these carefully selected retail partners who share our commitment to quality and artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {storeLocations.map((store) => (
              <Card key={store.id} className="overflow-hidden bg-white/90 backdrop-blur-sm border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      {store.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-start space-x-2 text-slate-600">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{store.address}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-slate-600">
                        <Clock className="w-4 h-4 flex-shrink-0" />
                        <span className="text-sm">{store.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-1">
                        Available Products
                      </p>
                      <Badge variant="outline" className="border-slate-300 text-slate-600 text-xs">
                        {store.displayType}
                      </Badge>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide font-medium mb-2">
                        About This Location
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {store.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {store.website && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={store.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Website
                          </a>
                        </Button>
                      )}
                      <Button variant="outline" size="sm" asChild>
                        <a href={`tel:${store.phone}`}>
                          <Phone className="w-3 h-3 mr-1" />
                          Call
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`} target="_blank" rel="noopener noreferrer">
                          <Navigation className="w-3 h-3 mr-1" />
                          Directions
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Contact for Custom Orders */}
      <div className="mt-20">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-50 to-rose-50 rounded-3xl p-10 border border-slate-200 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-light text-slate-800 mb-6">Custom Orders & Commissions</h3>
          <p className="text-slate-700 leading-relaxed mb-6">
            Looking for something specific or want to commission a custom piece? Gina accepts custom orders 
            for jewelry, furniture, stained glass, and garden designs. Each commission is a collaborative 
            process that results in a truly unique piece of art.
          </p>
          <p className="text-sm text-slate-600 mb-6">
            Visit any market location to discuss your vision, or contact one of our retail partners 
            to arrange a consultation for larger projects.
          </p>
          <Badge variant="outline" className="border-slate-300 text-slate-600">
            Custom orders typically take 2-6 weeks depending on complexity
          </Badge>
        </div>
      </div>
    </div>
  );
}
