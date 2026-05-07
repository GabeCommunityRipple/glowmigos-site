export type Review = {
  name: string;
  initial: string;
  rating: number;
  date: string;
  text: string;
  source: "google" | "nextdoor";
  avatarColor?: string;
};

export const reviews: Review[] = [
  {
    name: "Adam Sumner",
    initial: "A",
    rating: 5,
    date: "9 months ago",
    text: "Great company and great people.",
    source: "google",
    avatarColor: "bg-sky-500",
  },
  {
    name: "Marci Ford",
    initial: "M",
    rating: 5,
    date: "9 months ago",
    text: "Exceptional service. My roof no longer leaks and looks great. I highly recommend Ronny Webb.",
    source: "google",
    avatarColor: "bg-slate-700",
  },
  {
    name: "William Voyles",
    initial: "W",
    rating: 5,
    date: "9 months ago",
    text: "Best experience I ever had. Attentive to my wife's needs and questions while I was home working and got the job done efficiently. I would hire him again.",
    source: "google",
    avatarColor: "bg-emerald-600",
  },
  {
    name: "T Ballard",
    initial: "T",
    rating: 5,
    date: "9 months ago",
    text: "Completely impressed. Exceeded my expectations! Client interaction mastery! Responsive and efficient!!!",
    source: "google",
    avatarColor: "bg-sky-600",
  },
];
