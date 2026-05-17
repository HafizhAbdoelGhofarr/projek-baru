import { Calendar, MapPin, Users, Award, Clock, TrendingUp } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { ImageWithFallback } from '@/components/image-with-fallback';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
              <span className="text-xl font-bold text-foreground">EEA</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <Link href="/" className="px-4 py-2 rounded-xl transition-all duration-200 ease-out hover:text-primary hover:bg-primary/10">Home</Link>
              <Link href="/about" className="px-4 py-2 rounded-xl transition-all duration-200 ease-out hover:text-primary hover:bg-primary/10">About</Link>
              <Link href="/events" className="px-4 py-2 rounded-xl transition-all duration-200 ease-out hover:text-primary hover:bg-primary/10">Event</Link>
              <Link href="/seminars" className="px-4 py-2 rounded-xl transition-all duration-200 ease-out hover:text-primary hover:bg-primary/10">Seminar</Link>
              <Link href="/lombas" className="px-4 py-2 rounded-xl transition-all duration-200 ease-out hover:text-primary hover:bg-primary/10">Lomba</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="px-8 py-2 bg-card text-foreground rounded-full border border-border hover:border-primary hover:text-primary transition-all"
              >
                Login
              </Link>
              <Link
                href="/events"
                className="px-6 py-2 bg-gradient-to-r from-secondary to-primary text-white rounded-full hover:shadow-lg transition-shadow"
              >
                Lihat Event
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-5 py-2.5 rounded-full backdrop-blur-md bg-card/70 border border-border text-foreground shadow-lg transition-all duration-300 hover:bg-card hover:shadow-xl hover:-translate-y-0.5">
                <span className="text-sm text-foreground">🎉 Electrical Engineering in action</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Make Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">National Event</span> & Convention Truly Memorable
              </h1>
              <p className="text-lg text-muted-foreground">
                Join us for an unforgettable experience with industry leaders, innovative workshops, and networking opportunities that will transform your professional journey.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/events"
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white rounded-full hover:shadow-lg transition-all"
                >
                  Lihat Event
                </Link>
                <Link
                  href="/seminars"
                  className="px-8 py-3 bg-card text-foreground rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                >
                  Daftar Seminar
                </Link>
                <Link
                  href="/lombas"
                  className="px-8 py-3 bg-card text-foreground rounded-full border border-border hover:border-primary hover:text-primary transition-all"
                >
                  Daftar Lomba
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3 ">
                  {[
                  "img/levi-lei-KvRKc6_LkG8-unsplash.jpg",
                  "img/roblokmantep.png",
                  "img/mojtaba-mohammadi-azbFk_fV9_U-unsplash.jpg",
                  "img/vlcsnap-2026-02-04-15h51m30s166.png",
                    ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="attendee"
                  className="w-10 h-10 rounded-xl object-cover border-2 border-white"
                  style={{ zIndex: 10 - i }}
                  />
                    ))}
                  </div>
              <div>
                <p className="text-sm font-semibold text-foreground">2,500+ Attendees</p>
                <p className="text-xs text-muted-foreground">Already registered</p>
              </div>
              </div>
            </div>
              <div className="relative w-full h-[36rem] rounded-2xl overflow-hidden">
              {/* Background image */}
              <img
                src="img/awan vertikal.jpg"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay biar ga terlalu rame */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30"></div>

              {/* Logo di depan */}
              <div className="relative w-full h-full flex items-center justify-center">
                <ImageWithFallback
                  src="img/logo eea 2026.png"
                  alt="EEA Logo"
                  className="w-60 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Event */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About the Event</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover what makes our event the most anticipated gathering of professionals in the industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">3-Day Event</h3>
              <p className="text-gray-600">Three full days of workshops, seminars, and networking sessions</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-pink-600 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">50+ Speakers</h3>
              <p className="text-gray-600">Industry experts sharing their knowledge and experience</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-600 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Certificate</h3>
              <p className="text-gray-600">Get certified upon completion of the program</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Speakers */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Schedule & Speakers</h2>
            <p className="text-gray-600">Meet our amazing lineup of speakers</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Sarah Johnson', role: 'CEO, TechCorp', img: 'https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
              { name: 'Michael Chen', role: 'Lead Designer', img: 'https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
              { name: 'Emily Davis', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1762968286778-60e65336d5ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' },
              { name: 'David Park', role: 'Marketing Director', img: 'https://images.unsplash.com/photo-1773829020694-413e879d2957?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400' }
            ].map((speaker, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={speaker.img}
                  alt={speaker.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-1">{speaker.name}</h3>
                  <p className="text-sm text-gray-600">{speaker.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Stats */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">15+</div>
              </div>
              <p className="text-blue-100">Countries</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">2.5K+</div>
              </div>
              <p className="text-blue-100">Attendees</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">50+</div>
              </div>
              <p className="text-blue-100">Sessions</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 mr-2" />
                <div className="text-5xl font-bold">100%</div>
              </div>
              <p className="text-blue-100">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold">Eventa</span>
              </div>
              <p className="text-gray-400">Making events memorable since 2020</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Schedule</a></li>
                <li><a href="#" className="hover:text-white">Speakers</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg hover:shadow-lg transition-shadow">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 Eventa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}