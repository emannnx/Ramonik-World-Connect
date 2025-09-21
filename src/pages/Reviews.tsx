import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Quote, Plus, Trash } from "lucide-react";
import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, query, orderBy, deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";

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
  const fetchReviews = async () => {
    try {
      const q = query(collection(db, "reviews"), orderBy("created_at", "desc"));
      const querySnapshot = await getDocs(q);

      const reviewList: Review[] = [];
      querySnapshot.forEach((docSnap) => {
        reviewList.push({
          id: docSnap.id, ...(docSnap.data() as Omit<Review, 'id'>),
        });
      });

      setReviews(reviewList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setLoading(false);
    }
  };

  // Submit new review
  const submitReview = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || formData.rating === 0 || !formData.review.trim()) {
      toast.error("Please fill in all fields and provide a rating.");
      return;
    }

    setSubmitting(true);
    try {
      const newReview = {
        name: formData.name,
        rating: formData.rating,
        review: formData.review,
        created_at: new Date().toISOString()
      };

      await addDoc(collection(db, "reviews"), newReview);

      fetchReviews();
      setFormData({ name: "", rating: 0, review: "" });
      setShowAddForm(false);

      toast.success("Thank you for your review!");
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit your review. Please try again.");
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
        className={`h-5 w-5 ${index < rating ? "text-yellow-500 fill-current" : "text-gray-300"
          }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col mt-[20%] sm:mt-[4%]">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-900 text-white py-20 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Customer Reviews
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 mb-8">
            Real stories from our happy travelers. Share yours and inspire the next journey!
          </p>
          <Button
            onClick={() => setShowAddForm(true)}
            variant="secondary"
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold"
          >
            <Plus className="mr-2 h-5 w-5" />
            Add Review
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white shadow-inner">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">4.9</div>
              <div className="flex justify-center mb-2">{renderStars(5)}</div>
              <div className="text-gray-500">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">{reviews.length}+</div>
              <div className="text-gray-500">Total Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">98%</div>
              <div className="text-gray-500">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-700 mb-2">95%</div>
              <div className="text-gray-500">Repeat Customers</div>
            </div>
          </div>

          {/* {reviews.length > 0 && (
            <div className="mt-6 flex justify-center">
              <Button
                variant="destructive"
                size="sm"
                onClick={handleClearReviews}
                className="flex items-center gap-2"
              >
                <Trash className="w-4 h-4" /> Clear All Reviews
              </Button>
            </div>
          )} */}
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="text-center text-gray-500 text-lg">Loading reviews...</div>
          ) : reviews.length === 0 ? (
            <div className="text-center text-gray-500 text-lg italic">
              No reviews yet. Be the first to share your experience!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Card
                  key={review.id}
                  className="group shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl overflow-hidden"
                >
                  <CardContent className="p-6">
                    <div className="absolute top-4 right-4 text-blue-100">
                      <Quote className="h-8 w-8" />
                    </div>
                    <div className="flex items-center space-x-2 mb-3">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-600 mb-4 italic leading-relaxed">
                      "{review.review}"
                    </p>
                    <div className="border-t pt-3">
                      <div className="font-semibold text-blue-700">{review.name}</div>
                      <div className="text-xs text-gray-400 mt-1">
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
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-blue-700">Add Your Review</h2>
              <p className="text-gray-500 mt-1">We value your feedback!</p>
            </div>

            <form onSubmit={submitReview} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-blue-700 mb-2">
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
                <label className="block text-sm font-medium text-blue-700 mb-2">
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
                        className={`h-8 w-8 ${index < formData.rating
                          ? "text-yellow-500 fill-current"
                          : "text-gray-300 hover:text-yellow-400"
                          }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-700 mb-2">
                  Your Review *
                </label>
                <Textarea
                  rows={4}
                  value={formData.review}
                  onChange={(e) =>
                    setFormData({ ...formData, review: e.target.value })
                  }
                  placeholder="Tell us about your experience..."
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
                <Button
                  type="submit"
                  className="bg-blue-700 text-white hover:bg-blue-600"
                  disabled={submitting}
                >
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
