import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "Best PG Localities in Bengaluru for IT Professionals",
      excerpt: "Discover the top neighborhoods in Bengaluru that offer the perfect balance of connectivity, amenities, and affordability for working professionals in the tech industry.",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
      category: "Guides",
      author: "Rahul Verma",
      date: "March 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Complete Checklist Before Booking a PG in Bengaluru",
      excerpt: "A comprehensive guide covering everything you need to verify before signing a rental agreement, from legal documents to amenities and safety features.",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      category: "Tips",
      author: "Priya Sharma",
      date: "March 12, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "How to Negotiate Rent for Your PG Accommodation",
      excerpt: "Expert tips on negotiating rent prices, understanding deposit policies, and getting the best deal on your PG accommodation without compromising on quality.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
      category: "Finance",
      author: "Amit Patel",
      date: "March 10, 2024",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Safety Tips for Single Women Living in PGs",
      excerpt: "Essential safety guidelines and precautions for women choosing PG accommodations, including verification steps and what to look for in secure properties.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      category: "Safety",
      author: "Anjali Reddy",
      date: "March 8, 2024",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Co-living vs Traditional PG: Which is Right for You?",
      excerpt: "Compare the pros and cons of modern co-living spaces versus traditional PG accommodations to help you make an informed decision based on your lifestyle.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      category: "Lifestyle",
      author: "Vikram Singh",
      date: "March 5, 2024",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Understanding Your Rights as a Tenant in Karnataka",
      excerpt: "Know your legal rights and responsibilities as a tenant in Karnataka, including rental agreements, deposits, and dispute resolution mechanisms.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80",
      category: "Legal",
      author: "Meera Nair",
      date: "March 1, 2024",
      readTime: "8 min read"
    }
  ]

  const categories = ["All", "Guides", "Tips", "Safety", "Finance", "Lifestyle", "Legal"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-beige to-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-6xl">
              Resources & <span className="text-orange">Insights</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
              Expert advice, guides, and tips to help you find the perfect accommodation in Bengaluru
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "bg-orange hover:bg-orange-hover" : "border-2 hover:border-orange hover:text-orange"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Article */}
          <Card className="mb-16 overflow-hidden border-2 border-border/40 bg-white shadow-xl">
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto">
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="h-full w-full object-cover"
                />
                <Badge className="absolute left-4 top-4 bg-orange">Featured</Badge>
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <Badge className="mb-4 w-fit bg-orange/10 text-orange">{articles[0].category}</Badge>
                <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                  {articles[0].title}
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                  {articles[0].excerpt}
                </p>
                <div className="mb-6 flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>{articles[0].author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{articles[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{articles[0].readTime}</span>
                  </div>
                </div>
                <Button className="w-fit bg-orange hover:bg-orange-hover">
                  Read Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.slice(1).map((article) => (
              <Card
                key={article.id}
                className="group cursor-pointer overflow-hidden border-2 border-border/40 bg-white shadow-md transition-all hover:shadow-xl hover:border-orange/30"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <Badge className="absolute left-4 top-4 bg-orange/10 text-orange backdrop-blur-sm">
                    {article.category}
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-foreground line-clamp-2 group-hover:text-orange transition-colors">
                    {article.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full border-2 border-orange text-orange hover:bg-orange hover:text-white">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-orange to-orange-hover p-12 text-center shadow-2xl">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Find Your Perfect PG?
            </h2>
            <p className="mb-8 text-lg text-white/90">
              Browse through verified properties with detailed guides to help you decide
            </p>
            <Button className="bg-white font-bold text-orange shadow-lg transition-all hover:scale-105 hover:shadow-xl">
              Explore Properties
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
