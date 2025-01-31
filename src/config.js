const USERS = [
    {
      "name": "Amit Sharma",
      "city": "Delhi",
      "age": 25,
      "avatar": "https://i.pravatar.cc/150?img=1"
    },
    {
      "name": "Priya Desai",
      "city": "Mumbai",
      "age": 28,
      "avatar": "https://i.pravatar.cc/150?img=2"
    },
    {
      "name": "Rahul Mehta",
      "city": "Bangalore",
      "age": 30,
      "avatar": "https://i.pravatar.cc/150?img=3"
    },
    {
      "name": "Neha Patel",
      "city": "Mumbai",
      "age": 32,
      "avatar": "https://i.pravatar.cc/150?img=4"
    },
    {
      "name": "Sandeep Kumar",
      "city": "Delhi",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=5"
    },
    {
      "name": "Anjali Yadav",
      "city": "Bangalore",
      "age": 27,
      "avatar": "https://i.pravatar.cc/150?img=6"
    },
    {
      "name": "Ravi Singh",
      "city": "Kolkata",
      "age": 35,
      "avatar": "https://i.pravatar.cc/150?img=7"
    },
    {
      "name": "Simran Bedi",
      "city": "Chennai",
      "age": 24,
      "avatar": "https://i.pravatar.cc/150?img=8"
    },
    {
      "name": "Vikas Reddy",
      "city": "Chandigarh",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=9"
    },
    {
      "name": "Madhuri Joshi",
      "city": "Jaipur",
      "age": 32,
      "avatar": "https://i.pravatar.cc/150?img=10"
    },
    {
      "name": "Suresh Nair",
      "city": "Delhi",
      "age": 23,
      "avatar": "https://i.pravatar.cc/150?img=11"
    },
    {
      "name": "Kiran Gupta",
      "city": "Indore",
      "age": 26,
      "avatar": "https://i.pravatar.cc/150?img=12"
    },
    {
      "name": "Anil Verma",
      "city": "Lucknow",
      "age": 38,
      "avatar": "https://i.pravatar.cc/150?img=13"
    },
    {
      "name": "Sonal Dubey",
      "city": "Bhopal",
      "age": 31,
      "avatar": "https://i.pravatar.cc/150?img=14"
    },
    {
      "name": "Deepak Chauhan",
      "city": "Nagpur",
      "age": 33,
      "avatar": "https://i.pravatar.cc/150?img=15"
    },
    {
      "name": "Tanvi Agarwal",
      "city": "Mumbai",
      "age": 27,
      "avatar": "https://i.pravatar.cc/150?img=16"
    },
    {
      "name": "Rohit Verma",
      "city": "Kochi",
      "age": 26,
      "avatar": "https://i.pravatar.cc/150?img=17"
    },
    {
      "name": "Shikha Kapoor",
      "city": "Coimbatore",
      "age": 35,
      "avatar": "https://i.pravatar.cc/150?img=18"
    },
    {
      "name": "Kunal Saini",
      "city": "Patna",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=19"
    },
    {
      "name": "Anju Sharma",
      "city": "Vadodara",
      "age": 31,
      "avatar": "https://i.pravatar.cc/150?img=20"
    },
    {
      "name": "Pooja Gupta",
      "city": "Guwahati",
      "age": 22,
      "avatar": "https://i.pravatar.cc/150?img=21"
    },
    {
      "name": "Nitin Chauhan",
      "city": "Noida",
      "age": 36,
      "avatar": "https://i.pravatar.cc/150?img=22"
    },
    {
      "name": "Meenal Khanna",
      "city": "Agra",
      "age": 34,
      "avatar": "https://i.pravatar.cc/150?img=23"
    },
    {
      "name": "Vishal Gupta",
      "city": "Srinagar",
      "age": 28,
      "avatar": "https://i.pravatar.cc/150?img=24"
    },
    {
      "name": "Shweta Rai",
      "city": "Thane",
      "age": 33,
      "avatar": "https://i.pravatar.cc/150?img=25"
    },
    {
      "name": "Siddharth Roy",
      "city": "Faridabad",
      "age": 30,
      "avatar": "https://i.pravatar.cc/150?img=26"
    },
    {
      "name": "Neelam Rani",
      "city": "Bhubaneswar",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=27"
    },
    {
      "name": "Ritu Mehta",
      "city": "Kanpur",
      "age": 25,
      "avatar": "https://i.pravatar.cc/150?img=28"
    },
    {
      "name": "Arvind Yadav",
      "city": "Jaipur",
      "age": 40,
      "avatar": "https://i.pravatar.cc/150?img=29"
    },
    {
      "name": "Divya Kumari",
      "city": "Rajkot",
      "age": 28,
      "avatar": "https://i.pravatar.cc/150?img=30"
    },
    {
      "name": "Milan Banerjee",
      "city": "Mysuru",
      "age": 34,
      "avatar": "https://i.pravatar.cc/150?img=31"
    },
    {
      "name": "Nikita Shah",
      "city": "Vijayawada",
      "age": 27,
      "avatar": "https://i.pravatar.cc/150?img=32"
    },
    {
      "name": "Vineet Dubey",
      "city": "Nashik",
      "age": 32,
      "avatar": "https://i.pravatar.cc/150?img=33"
    },
    {
      "name": "Sangeeta Reddy",
      "city": "Gurugram",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=34"
    },
    {
      "name": "Sahil Soni",
      "city": "Meerut",
      "age": 31,
      "avatar": "https://i.pravatar.cc/150?img=35"
    },
    {
      "name": "Neelam Patel",
      "city": "Vellore",
      "age": 24,
      "avatar": "https://i.pravatar.cc/150?img=36"
    },
    {
      "name": "Manoj Sharma",
      "city": "Bhubaneswar",
      "age": 28,
      "avatar": "https://i.pravatar.cc/150?img=37"
    },
    {
      "name": "Vinay Rao",
      "city": "Lucknow",
      "age": 35,
      "avatar": "https://i.pravatar.cc/150?img=38"
    },
    {
      "name": "Rina Joshi",
      "city": "Chandigarh",
      "age": 29,
      "avatar": "https://i.pravatar.cc/150?img=39"
    }
  ];

  export {USERS};