import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Quote, Plus } from "lucide-react";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  name: string;
  rating: number;
  review: string;
  created_at: string;
}

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    rating: 0,
    review: ""
  });
  const [submitting, setSubmitting] = useState(false);

  // Fetch reviews from localStorage
  const fetchReviews = () => {
    try {
      const storedReviews = localStorage.getItem("reviews");
      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setLoading(false);
    }
  };

  // Submit new review and save to localStorage
  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.review.trim() || formData.rating === 0) {
      alert("Please fill in all required fields and select a rating.");
      return;
    }

    setSubmitting(true);

    try {
      const newReview: Review = {
        id: Date.now().toString(),
        name: formData.name,
        rating: formData.rating,
        review: formData.review,
        created_at: new Date().toISOString()
      };

      const updatedReviews = [newReview, ...reviews];
      setReviews(updatedReviews);

      // Save to localStorage
      localStorage.setItem("reviews", JSON.stringify(updatedReviews));

      // Reset form
      setFormData({ name: "", rating: 0, review: "" });
      setShowAddForm(false);
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-500 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-travel-blue to-travel-blue text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Customer Reviews</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 mb-8">
            See what our travelers say about their experiences with Ramonik Travel & Tours
          </p>
          <Button
            onClick={() => setShowAddForm(true)}
            variant="outline"
            size="lg"
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add Review
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-travel-blue mb-2">4.9</div>
              <div className="flex justify-center mb-2">{renderStars(5)}</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-travel-blue mb-2">
                {reviews.length}+
              </div>
              <div className="text-muted-foreground">Total Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-travel-blue mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-travel-blue mb-2">95%</div>
              <div className="text-muted-foreground">Repeat Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gradient-to-b from-travel-light-blue to-white">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center">
              <div className="text-xl text-muted-foreground">Loading reviews...</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Card
                  key={review.id}
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
                >
                  <CardContent className="p-6">
                    <div className="absolute top-4 right-4 text-travel-blue/20">
                      <Quote className="h-8 w-8" />
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      {renderStars(review.rating)}
                    </div>

                    <p className="text-muted-foreground mb-4 italic leading-relaxed">
                      "{review.review}"
                    </p>

                    <div className="border-t pt-4">
                      <div className="font-semibold text-travel-blue">{review.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {new Date(review.created_at).toLocaleDateString()}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Add Review Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-travel-blue">Add Your Review</h2>
              <p className="text-muted-foreground mt-2">
                Share your experience with Ramonik Travel & Tours
              </p>
            </div>

            <form onSubmit={handleSubmitReview} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-travel-blue mb-2">
                  Your Name *
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-travel-blue mb-2">
                  Rating *
                </label>
                <div className="flex space-x-1">
                  {Array.from({ length: 5 }, (_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, rating: index + 1 })
                      }
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          index < formData.rating
                            ? "text-yellow-500 fill-current"
                            : "text-gray-300 hover:text-yellow-400"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-travel-blue mb-2">
                  Your Review *
                </label>
                <Textarea
                  rows={4}
                  value={formData.review}
                  onChange={(e) =>
                    setFormData({ ...formData, review: e.target.value })
                  }
                  placeholder="Tell us about your experience with Ramonik Travel & Tours..."
                  required
                />
              </div>

              <div className="flex justify-end space-x-4 pt-4 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowAddForm(false)}
                  disabled={submitting}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="travel" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Review"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Reviews;
