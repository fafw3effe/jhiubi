// Movies data
const movies = [ 

    /*
    
    {
            "title": " [2025] WEB-DL [Hindi + English] | Full Movie",
            "im": "",
            "bgi": "",
            "dl": "https://pixeldrain.net/api/file/?download",
            "year": "",
            "duration": " min",
            "rating": "",
            "genre": "",
            "description": "",
            "type": "movie",
            "quality": "webdl",
            "cast": "Vicky Kaushal, Radhika Apte, Kumud Mishra"
    },
    
    */

    
{
    "title": "Life of Pi [2012] WEB-DL [Hindi + English] | Full Movie",
    "im": "iLgRu4hhSr6V1uManX6ukDriiSc",
    "bgi": "7H01zprUY67n7bdcFg6VMvrkNjs",
    "dl": "",
    "year": "2012",
    "duration": "2h 7m",
    "rating": "7.4",
    "genre": "Adventure,Drama,",
    "description": "The story of an Indian boy named Pi, a zookeeper's son who finds himself in the company of a hyena, zebra, orangutan, and a Bengal tiger after a shipwreck sets them adrift in the Pacific Ocean.",
    "type": "movie",
    "quality": "webdl",
    "cast": "Suraj Sharma,Irrfan Khan,Ayush Tandon,Gautam Belur,Adil Hussain"
},
{
    "title": "Dry Day [2023] WEB-DL [Hindi + English] | Full Movie",
    "im": "lse7qPwWpYi0bdjmjrXfam7KpXg",
    "bgi": "oweut3EYuRba00Xv0o0G6JUrLua",
    "dl": "https://pixeldrain.net/api/file/GvaJqjHk?download",
    "year": "2023",
    "duration": "2h 8m",
    "rating": "7.5",
    "genre": "Comedy,Drama,",
    "description": "When his wife makes a vow to abort their baby due to his alcoholism, Gannu, the biggest loafer of Jagodhar sets out on a protest to ban alcohol in his town all the while grappling with his own drinking habits!",
    "type": "movie",
    "quality": "webdl",
    "cast": "Jitendra Kumar,Shriya Pilgaonkar,Annu Kapoor,Shrikant Verma,Jagdish Rajpurohit"
},
{
    "title": "Driver Jamuna [2022] UNCUT WEB-DL [Hindi + English] | Full Movie",
    "im": "cev24xOOl5BFPgKOZCCREkTVW8w",
    "bgi": "sakfYi9HqLeLkDYggOtMuayqmlQ",
    "dl": "https://pixeldrain.net/api/file/qvuzrDDY?download",
    "year": "2022",
    "duration": "1h 44m",
    "rating": "5.5",
    "genre": "Action,Thriller,",
    "description": "Jamuna, a cab driver, finds herself in trouble when three contract killers get in for a ride. Can she save herself from this horrific situation?",
    "type": "movie",
    "quality": "webdl",
    "cast": "Aishwarya Rajesh,Aadukalam Naren,Thangapandiyan,Sriranjini,Kavitha Bharathi"
},
{
    "title": "The Divorce Insurance [Season 1] [Episode 11] WEB-DL [Hindi + English]",
    "im": "6HAbRWYkX3bouEeHA4bjsUxznKC",
    "bgi": "tSeyn9VqrAKuMytgDCXY9iMGXa8",
    "dl": "https://pixeldrain.net/api/file/oNiH6fZ4?download",
    "year": "2025",
    "duration": "1h",
    "rating": "6.9",
    "genre": "Drama,Comedy,",
    "description": "No Ki-jun, an employee at an insurance company, decides to develop a divorce insurance policy after personally experiencing three divorces that impacted his life and finances. Despite potential biases, he believes divorce is an unforeseen disaster and establishes a team for divorce insurance.",
    "type": "series",
    "quality": "webdl",
    "cast": "Lee Dong-wook,Lee Kwang-soo,Lee Ju-bin,Lee Da-hee,Kim Won-hae"
},
{
    "title": "Suits LA [Season 1] [Episode 11] WEB-DL [Hindi + English]",
    "im": "3hYiNPkcLoI3QWDokOHQJIfn55O",
    "bgi": "ljAdFwDLQLlOBIwheKmAdcUS0HM",
    "dl": "https://pixeldrain.net/api/file/WQniLexs?download",
    "year": "2025",
    "duration": "1h",
    "rating": "7.7",
    "genre": "Drama,",
    "description": "Ted Black, a former federal prosecutor from New York, has reinvented himself representing the most powerful clients in Los Angeles. But his firm is at a crisis point, and in order to survive, he must embrace a role he held in contempt his entire career.",
    "type": "series",
    "quality": "webdl",
    "cast": "Stephen Amell,Lex Scott Davis,Josh McDermitt,Bryan Greenberg,Maggie Grace"
},
{
    "title": "Inside Man: Most Wanted [2019] WEB-DL [Hindi + English] | Full Movie",
    "im": "zcDZisqVQK9akfKgyrB9HYzYuVh",
    "bgi": "OvMX5sgJ0vLmKQbIiS5yy7jn5H",
    "dl": "https://pixeldrain.net/api/file/VZJUtCYF?download",
    "year": "2019",
    "duration": "1h 46m",
    "rating": "6.5",
    "genre": "Action,Crime,Thriller,",
    "description": "An NYPD hostage negotiator teams up with a federal agent to rescue dozens of tourists held hostage during a 10-hour seige at the U.S. Federal Reserve.",
    "type": "movie",
    "quality": "webdl",
    "cast": "Aml Ameen,Rhea Seehorn,Roxanne McKee,Tanya van Graan,Jessica Sutton"
},
{
    "title": "Virupaksha [2023] UNCUT WEB-DL [Hindi + Telugu] | Full Movie",
    "im": "fqMn4h9ctOyumII2nXDnm5mRTxQ",
    "bgi": "xfm3oNEyguquFMW3Yq4UNgnoVRL",
    "dl": "https://pixeldrain.net/api/file/qwqRc5EY?download",
    "year": "2023",
    "duration": "2h 26m",
    "rating": "7.1",
    "genre": "Horror,Mystery,Thriller,",
    "description": "Set in a village named Rudravanam in 1990's, Surya along with his mother, visit there after a long time. Suddenly a series of mysterious deaths occur due to an unknown person's occult practice and whole village is scared. Will Surya find the person causing the deaths and save the village?",
    "type": "movie",
    "quality": "UNCUT WEB-DL",
    "cast": "Sai Durgha Tej,Samyuktha,Brahmaji,Rajiv Kanakala,Ravi Krishna"
},
    {
    "title": "Ala Vaikunthapurramuloo [2020] WEB-DL [Hindi + Telugu] | Full Movie",
    "im": "2rzORJaegE2bbKNVkQXbZCeV0BP",
    "bgi": "7m8pL1cNz1okhxOltBDNG4XTxdx",
    "dl": "https://pixeldrain.net/api/file/oTkDyzWn?download",
    "year": "2020",
    "duration": "2h 45m",
    "rating": "6.7",
    "genre": "Action,Comedy,Drama,",
    "description": "Fate plays a vital role in connecting the life of Bantu, a son who seeks validation from his cold-hearted father with the life of Raj, whose millionaire father wishes that he was more assertive.",
    "type": "movie",
    "quality": "webdl",
    "cast": "Allu Arjun, Pooja Hegde, Tabu"
    },
    {
        "title": "The Last of Us [Season 2] [Episode 4] WEB-DL [Hindi + English] | HBO Series",
        "im": "dmo6TYuuJgaYinXBPjrgG9mB5od",
        "bgi": "hI5PALWKjn9DeyQkAiObJwzSeOz",
        "dl": "https://pixeldrain.net/api/file/r7SyvyhS?download",
        "link": "tt3581920",
        "year": "2025",
        "duration": "60 min",
        "rating": "9.3",
        "genre": "Action, Adventure, Drama",
        "description": "The Last of Us follows Joel and Ellie as they navigate a post-apocalyptic world. In Season 2, the journey becomes even more perilous as the two continue to face new threats and uncover shocking truths.",
        "type": "series",
        "quality": "webdl",
        "cast": "Pedro Pascal, Bella Ramsey, Murray Bartlett, Con O'Neill, Ian Alexander, Jeffrey Pierce, Dustin Ingram"
    },    
    {
        "title": "Doraemon the Movie: Nobita's Sky Utopia [2023] BluRay [Hindi + English] | Full Movie",
        "im": "uux6M8z3hxLDkq8LXSzq8528mrq",
        "bgi": "zq4HFBohIe424AI55Z8CZBbgJUZ",
        "dl": "https://pub-ed0ca22af5c04301b7abe9dac4aaf9bc.r2.dev/Doraemon.Nobitas.Sky.Utopia.2023.720p.BluRay.Hindi.Japanese.ESubs-Vegamovies.is.mkv",
        "link": "tt21223380",
        "year": "2023",
        "duration": "97 min",
        "rating": "7.5",
        "genre": "Animation, Adventure, Family",
        "description": "Doraemon and Nobita embark on a thrilling adventure in the sky as they discover a new world of floating islands and secrets that could change everything.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Wasabi Mizuta, Megumi Ohara, Yumi Kakazu, Satoshi Tsumabuki"
    },
    {
        "title": "Mars Express [2023] BluRay [Hindi + English] | Full Movie",
        "im": "g8rUn0khoYB3G4gPPGTF1Xv9Olu",
        "bgi": "hFh3BpBQSZfYImHLdjBMCAwJ6I",
        "dl": "https://pixeldrain.net/api/file/ryKtBQU1?download",
        "link": "tt26915336",
        "year": "2023",
        "duration": "85 min",
        "rating": "6.8",
        "genre": "Sci-Fi, Thriller",
        "description": "Set on Mars, this thrilling sci-fi film follows a group of explorers who uncover dark secrets that could lead to the destruction of humanity.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Giovanni Ribisi, Kelsey Grammer, Keira Knightley"
    },
    {
        "title": "Peaky Blinders [Season 2] [Episode 2] WEB-DL [Hindi + English]",
        "im": "m4JPtC3gWUsq0GlfNK3SdgkL9XG",
        "bgi": "yQUuWCeTkuhZrXEKcEtMWisoCwO",
        "dl": "https://pixeldrain.net/api/file/QkeMSRdR?download",
        "link": "tt2442560",
        "year": "2013",
        "duration": "58 min",
        "rating": "8.8",
        "genre": "Crime, Drama",
        "description": "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby, a crime boss set on moving up in the world no matter the cost.",
        "type": "series",
        "quality": "webdl",
        "cast": "Cillian Murphy, Sam Neill, Helen McCrory"
    },
    {
        "title": "Dragon [2025] WEB-DL [Hindi + Tamil] | Full Movie",
        "im": "3BR3YTR04dO9ztCx8LZx2C2eu4G",
        "bgi": "8bhvwNGOzUHUbtZ52NEseQnWtEH",
        "dl": "https://pixeldrain.net/api/file/Rt52vXzB?download",
        "link": "tt32080876",
        "year": "2025",
        "duration": "110 min",
        "rating": "7.2",
        "genre": "Action, Fantasy, Drama",
        "description": "In a battle between humans and dragons, a young warrior must fight to save her homeland from a devastating war that could destroy everything she holds dear.",
        "type": "movie",
        "quality": "webdl",
        "cast": "Nivetha Thomas, Sree Vishnu, Sampath Raj"
    },
    {
        "title": "Retro [2025] HDCAM [Hindi] | Full Movie",
        "im": "94lS6zIdNGozxiAgnet0BAbvMWV",
        "bgi": "rGcZhLzwOLz3OWWpYrelgP4HUIQ",
        "dl": "https://pixeldrain.net/api/file/hM4L4Pv5?download",
        "link": "tt31945132",
        "year": "2025",
        "duration": "95 min",
        "rating": "6.5",
        "genre": "Sci-Fi, Thriller",
        "description": "In a futuristic world, a detective investigates a mysterious crime that leads him to a time-bending conspiracy threatening the fabric of reality.",
        "type": "movie",
        "quality": "hdcam",
        "cast": "Anushka Sharma, Vijay Sethupathi, Gautham Menon"
    },
    {
        "title": "HIT: The Third Case [2025] HQ PRE-HD [Hindi + Telugu] | Full Movie",
        "im": "wT9tGyFol4RBwkjESXUWeBdnLJn",
        "bgi": "xzpXvyetmrdR3NSRN9uy0xO3lR1",
        "dl": "https://pixeldrain.net/api/file/9ruFwKGJ?download",
        "link": "tt23804696",
        "year": "2025",
        "duration": "135 min",
        "rating": "7.8",
        "genre": "Crime, Mystery, Thriller",
        "description": "A hard-hitting investigator is pulled into a case that not only challenges his limits but also uncovers a deep conspiracy in the criminal world.",
        "type": "movie",
        "quality": "hq pre-hd",
        "cast": "Rajeev Khandelwal, Nivetha Pethuraj, Sandeep Goyat"
    },
    {
        "title": "Thunderbolts* [2025] HDCAM [Hindi] | Full Movie",
        "im": "1top0ND4DFGNvCdl0TwPl7Tv7sB",
        "bgi": "3Ym8diDGcHqtsTSo53xwiWJk38U",
        "dl": "https://pixeldrain.net/api/file/drAXR6Uy?download",
        "link": "tt20969586",
        "year": "2025",
        "duration": "105 min",
        "rating": "7.3",
        "genre": "Action, Adventure, Superhero",
        "description": "The Thunderbolts, a team of anti-heroes, are tasked with saving the world from a new and dangerous threat. Will they be able to overcome their own demons to succeed?",
        "type": "movie",
        "quality": "hdcam",
        "cast": "Florence Pugh, Sebastian Stan, Wyatt Russell, David Harbour"
    },
        {
            "title": "Batman: The Dark Knight [2008] BluRay [Hindi + English] | Full Movie",
            "im": "qJ2tW6WMUDux911r6m7haRef0WH",
            "bgi": "qg9NQ0Zkdfz9XWHtJ1X1GtKqqe9",
            "dl": "https://pixeldrain.net/api/file/yDww3rJv?download",
            "link": "tt0468569",
            "year": "2008",
            "duration": "152 min",
            "rating": "9.0",
            "genre": "Action, Crime, Drama",
            "description": "Batman faces off against the Joker, a criminal mastermind intent on causing chaos and destroying Gotham City. With a moral dilemma at every turn, the fate of Gotham lies in Batman's hands.",
            "type": "movie",
            "quality": "bluRay",
            "cast": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine"
        },
        {
            "title": "Game of Thrones [Season 1] BluRay [Hindi + English] | All Episodes",
            "im": "wgfKiqzuMrFIkU1M68DDDY8kGC1",
            "bgi": "aGehSaCUVfWFSu953kuo6BsyZVw",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=oVpZbzpG&sn=1&es=Game.Of.Thrones.S01E&e=10&el=.720p.x264.Bluray.Hindi.English.Esubs.Vegamovies.To.mkv",
            "link": "tt0944947",
            "year": "2011",
            "duration": "60 min per episode",
            "rating": "9.3",
            "genre": "Action, Adventure, Drama",
            "description": "In the land of Westeros, noble families vie for control of the Iron Throne. Power, betrayal, and war are at the heart of this epic fantasy drama series.",
            "type": "series",
            "quality": "bluRay",
            "cast": "Emilia Clarke, Kit Harington, Lena Headey, Peter Dinklage"
        },
        {
            "title": "RED 2 [2013] BluRay [Hindi + English] | Full Movie",
            "im": "tbksijr6g340yFWRgI4JfwrtM9h",
            "bgi": "kjNCChDXQplTK6uTBmxJi3PdrhT",
            "dl": "https://pixeldrain.net/api/file/4PDwEUPR?download",
            "link": "tt1821694",
            "year": "2013",
            "duration": "116 min",
            "rating": "6.7",
            "genre": "Action, Comedy, Crime",
            "description": "The ex-CIA operatives are back for another mission, this time facing a new threat. With explosive action and humor, they must team up once again to stop a global disaster.",
            "type": "movie",
            "quality": "bluRay",
            "cast": "Bruce Willis, Helen Mirren, John Malkovich, Mary-Louise Parker"
        },
        {
            "title": "Stand By Me Doraemon 2 [2020] BluRay [Hindi] | Full Movie",
            "im": "vBv8iOFPLnXmtELUjcFc7OKHsR4",
            "bgi": "iMGd5FPajzsoEyD142pQr5wh9eS",
            "dl": "https://pixeldrain.net/api/file/kL88hgaF?download",
            "link": "tt13428402",
            "year": "2020",
            "duration": "95 min",
            "rating": "7.8",
            "genre": "Animation, Family",
            "description": "Doraemon and Nobita go on a new adventure that explores the importance of friendship and family. With the help of futuristic gadgets, they discover how to solve life's challenges.",
            "type": "movie",
            "quality": "bluRay",
            "cast": "Wasabi Mizuta, Megumi Ohara, Yumi Kakazu"
        },
        {
            "title": "Pokemon Detective Pikachu [2020] BluRay [Hindi + English] | Full Movie",
            "im": "uhWvnFgg3BNlcUz0Re1HfQqIcCD",
            "bgi": "99fKFSYYKadyJ8axbhuXDy4zpfO",
            "dl": "https://pixeldrain.net/api/file/bbd4v5hQ?download",
            "link": "tt5884052",
            "year": "2020",
            "duration": "104 min",
            "rating": "6.9",
            "genre": "Adventure, Comedy, Family",
            "description": "Detective Pikachu teams up with a young man to uncover the mystery behind his father's disappearance, with humor and adventure in a world full of Pokémon.",
            "type": "movie",
            "quality": "bluRay",
            "cast": "Ryan Reynolds, Justice Smith, Kathryn Newton, Bill Nighy"
        },
        {
            "title": "Shinchan Kaanta Lagaa [2015] BluRay [Hindi] | Full Movie",
            "im": "rdIhlmuqFZ8gQtBbGQcCkLJ7jmB",
            "bgi": "cnNo0K43K3wiEqMqJuHei3fsUhk",
            "dl": "https://pixeldrain.net/api/file/KRKSZVXF?download",
            "link": "tt4691348",
            "year": "2015",
            "duration": "90 min",
            "rating": "5.4",
            "genre": "Animation, Comedy, Family",
            "description": "Shinchan and his mischievous ways lead to hilarious adventures. In this animated movie, his antics bring laughs and chaos in his usual style.",
            "type": "movie",
            "quality": "bluRay",
            "cast": "Akio Otsuka, Kiyomi Asai, Satomi Kōrogi"
        },
        {
            "title": "Ben 10: Alien Swarm [2009] BluRay [Hindi + English] | Full Movie",
            "im": "wROzAzrcSsRTu1fQQu2QdaUER2X",
            "bgi": "le4ro3QONV0NSlRSYg3Lx4lqc6w",
            "dl": "https://pixeldrain.net/api/file/VkPQRQt2?download",
            "link": "tt1327701",
            "year": "2009",
            "duration": "68 min",
            "rating": "6.0",
            "genre": "Action, Adventure, Animation",
            "description": "Ben Tennyson and his team of alien heroes must stop an alien villain from unleashing chaos. With action-packed moments and alien transformations, this movie is a must-watch for fans.",
            "type": "movie",
            "quality": "bluRay",
            "cast": "Yuri Lowenthal, Dee Bradley Baker, Meagan Moore, Barry Dennen"
        },
        {
            "title": "The Bhootnii [2025] HQ PRE-HD [Hindi] | Full Movie",
            "im": "6dT1KCa4wzkFYidXRVEg4OwntmP",
            "bgi": "foCFZLADroNnhn07aFRoijUKpC1",
            "dl": "https://pixeldrain.net/api/file/y4fRSCP7?download",
            "link": "tt27162102",
            "year": "2025",
            "duration": "95 min",
            "rating": "5.7",
            "genre": "Horror, Mystery",
            "description": "A young woman uncovers the dark secrets of an abandoned house, leading to terrifying encounters with the supernatural forces haunting it.",
            "type": "movie",
            "quality": "hq pre-hd",
            "cast": "Priya Anand, Rahul Ravindran, Kishore"
        },
        {
            "title": "Raid 2 [2025] HQ PRE-HD [Hindi] | Full Movie",
            "im": "562SAxZP1sLuYqDDTuODu3hdGyx",
            "bgi": "uKhBujLqYCcfU1kaxXHNCEyZnT",
            "dl": "https://pixeldrain.net/api/file/w6RvXQwQ?download",
            "link": "tt28089700",
            "year": "2025",
            "duration": "140 min",
            "rating": "7.4",
            "genre": "Action, Crime, Thriller",
            "description": "A top police officer seeks revenge against the criminals responsible for his brother's murder, delving deeper into a world of corruption and crime.",
            "type": "movie",
            "quality": "hq pre-hd",
            "cast": "Ajay Devgn, Sidharth Malhotra, Ronit Roy, Manoj Bajpayee"
        },
        {
            "title": "Season of Love - AKA Ask Mevsimi [2025] WEB-DL [Hindi + Turkish] | Full Movie",
            "im": "mYus8GNVi8BYIubE5bsPkrz6u13",
            "bgi": "oOQYW70LdBNSNPmfnLVDgGBYazK",
            "dl": "https://pixeldrain.net/api/file/2DyNogqH?download",
            "link": "tt30050756",
            "year": "2025",
            "duration": "105 min",
            "rating": "7.1",
            "genre": "Romance, Drama",
            "description": "Two souls from different cultures are brought together by fate, embarking on a journey of love, self-discovery, and emotional growth in this heartfelt romance.",
            "type": "movie",
            "quality": "webdl",
            "cast": "Elçin Sangu, Baran Akbulut, Mert Fırat"
        },
        {
            "title": "Kull - The Legacy of the Raisingghs [Season 1] WEB-DL [Hindi] | All Episodes",
            "im": "fQSsgKQgGmE0dHZCXCmK3rlFBJ5",
            "bgi": "zhvttpkuxfycC7Mt1vIzYzXWycs",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=KP14zq2B&sn=1&es=Kull.The.Legacy.of.the.Raisingghs.S01.720p.Hindi.WEB-DL.5.1.ESub.x264-HDHub4u.Ms/Kull.The.Legacy.of.the.Raisingghs.S01E&e=8&el=.720p.Hindi.WEB-DL.5.1.ESub.x264-HDHub4u.Ms.mkv",
            "link": "tt32235809",
            "year": "2025",
            "duration": "50 min per episode",
            "rating": "6.6",
            "genre": "Fantasy, Adventure",
            "description": "The legacy of the Raisingghs unfolds as the hero navigates the treacherous world of magic, betrayal, and hidden secrets, setting the stage for an epic adventure.",
            "type": "series",
            "quality": "webdl",
            "cast": "Rajkummar Rao, Shweta Tripathi, Gajraj Rao"
        },
        {
            "title": "Black, White & Gray - Love Kills [Season 1] WEB-DL [Hindi] | All Episodes",
            "im": "wEWjbuCIg2wYddOr3CJ2rX1qWV8",
            "bgi": "8XhUj3YEycKMcWhgRKYGALCpCZc",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=xnHc81w5&sn=1&es=Black.White.and.Gray.Love.Kills.S01.720p.Hindi.WEB-DL.5.1.ESub.x264-HDHub4u.Ms/Black.White.and.Gray.Love.Kills.S01E&e=6&el=.720p.Hindi.WEB-DL.5.1.ESub.x264-HDHub4u.Ms.mkv",
            "link": "tt35822727",
            "year": "2025",
            "duration": "45 min per episode",
            "rating": "7.0",
            "genre": "Thriller, Drama",
            "description": "In a world of black and white, a group of individuals discover that love and revenge are intertwined in ways they never imagined. A psychological drama filled with suspense.",
            "type": "series",
            "quality": "webdl",
            "cast": "Anushka Sharma, Richa Chadha, Shashank Arora"
        },
        {
            "title": "Valiant One [2025] WEB-DL [Hindi + English] | Full Movie",
            "im": "sT8Z14RDCAd6szzxzWFAU4xcMwg",
            "bgi": "oaM39dDJu82Doc0iCYZRyTJNgHS",
            "dl": "https://pixeldrain.net/api/file/qDrHoNDP?download",
            "link": "tt21442114",
            "year": "2025",
            "duration": "105 min",
            "rating": "7.2",
            "genre": "Action, Drama",
            "description": "A former soldier is thrust into a high-stakes mission that challenges both his physical and mental strength, fighting for justice in a dangerous world.",
            "type": "movie",
            "quality": "webdl",
            "cast": "Vicky Kaushal, Radhika Apte, Kumud Mishra"
        }, 
    
    {
        "title": "The Bayou [2025] WEB-DL [Hindi + English] | Full Movie",
        "im": "sf6j1SbgDf7VTjL1MRq5MAQSOyE",
        "bgi": "6Hqq2MUt2vQyzKgUbpNQkPBmFwz",
        "dl": "https://pixeldrain.net/api/file/h6oUwcgX?download",
        "link": "tt29343289",
        "year": "2025",
        "duration": "102 min",
        "rating": "6.4",
        "genre": "Horror, Thriller",
        "description": "A group of friends gets trapped in a swampy bayou where the land harbors dark, supernatural secrets. They must fight for their lives and uncover the horrifying truth.",
        "type": "movie",
        "quality": "webdl"
    },
    {
        "title": "Peaky Blinders [Season 2] [Episode 1] WEB-DL [Hindi + English]",
        "im": "m4JPtC3gWUsq0GlfNK3SdgkL9XG",
        "bgi": "2JxCri29xSPtPdrrZBWtbehhClL",
        "dl": "https://pixeldrain.net/api/file/RUMpVy7v?download",
        "link": "tt2442560",
        "year": "2013",
        "duration": "58 min",
        "rating": "8.8",
        "genre": "Crime, Drama",
        "description": "Tommy Shelby faces new challenges as he tries to expand the Peaky Blinders' influence. Family, power, and betrayal continue to dominate the streets of Birmingham.",
        "type": "series",
        "quality": "webdl"
    },
    {
        "title": "Another Simple Favor [2025] WEB-DL [Hindi + English] | Full Movie",
        "im": "zboCGZ4aIqPMd7VFI4HWnmc7KYJ",
        "bgi": "q81xMwM28e1f81NUx5dU7kpAWgs",
        "dl": "https://pixeldrain.net/api/file/vXumdhH4?download",
        "link": "tt20214908",
        "year": "2025",
        "duration": "100 min",
        "rating": "7.0",
        "genre": "Mystery, Thriller",
        "description": "A woman investigates the disappearance of her best friend, only to uncover a deeper conspiracy that threatens her own life.",
        "type": "movie",
        "quality": "webdl"
    },
    {
        "title": "Costao [2025] WEB-DL [Hindi] | Full Movie",
        "im": "5Ott6Xp2rxVGMMtVpeMRh62FuPV",
        "bgi": "14QSPSgPwimDX67BBy8r7qQ0j8y",
        "dl": "https://pixeldrain.net/api/file/XFb3mreo?download",
        "link": "tt13261550",
        "year": "2025",
        "duration": "95 min",
        "rating": "6.2",
        "genre": "Drama, Mystery",
        "description": "A struggling artist seeks solace in a remote coastal town, but soon realizes that the town holds dark secrets that change his life forever.",
        "type": "movie",
        "quality": "webdl"
    },
    {
        "title": "Ali [2001] BluRay [English] | Full Movie",
        "im": "hBE9VTgwmHbIBkJ0uxrnmqJOpkm",
        "bgi": "9hSuFFBJFYrVhiIu7X16M7C48dK",
        "dl": "https://pixeldrain.net/api/file/ZGJAiiA5?download",
        "link": "tt0248667",
        "year": "2001",
        "duration": "157 min",
        "rating": "6.8",
        "genre": "Biography, Drama, Sport",
        "description": "The life of boxing legend Muhammad Ali, focusing on his rise to fame, his personal battles, and his controversial political stance.",
        "type": "movie",
        "quality": "bluRay"
    },
    {
        "title": "Bromance [2025] WEB-DL [Hindi + Malayalam] | Full Movie",
        "im": "2xzgtY0d7xbqeTWdF3tDgd5WeVM",
        "bgi": "kTx0OshQyYMMJ8EtWwV9DDKNf0R",
        "dl": "https://pixeldrain.net/api/file/ryiPBkWQ?download",
        "link": "tt32135710",
        "year": "2025",
        "duration": "110 min",
        "rating": "7.1",
        "genre": "Comedy, Drama",
        "description": "Two childhood friends reunite after many years and embark on a journey of self-discovery, leading to both comic and emotional moments.",
        "type": "movie",
        "quality": "webdl"
    },
    {
        "title": "The Eternaut [Season 1] WEB-DL [Hindi + English] | All Episodes",
        "im": "ucI5KroZLP0KyJqQnAdOpzhVvBs",
        "bgi": "vxZWeJbTpjysZo5agCnmQCCCsxt",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=B3bv5MAQ&sn=1&es=The.Eternaut.S01.720p.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ms/The.Eternaut.S01E&e=6&el=.720p.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ms.mkv",
        "link": "tt27740241",
        "year": "2025",
        "duration": "50 min per episode",
        "rating": "7.4",
        "genre": "Sci-Fi, Drama",
        "description": "A post-apocalyptic world where humanity's survival depends on a mysterious snowfall. A group of survivors must fight to uncover the truth about the eerie snowstorm.",
        "type": "series",
        "quality": "webdl"
    },
    {
        "title": "Peaky Blinders [Season 1] [Episode 6] WEB-DL [Hindi + English]",
        "im": "vPlsKun2WZEsqe3yZTmebxtwElW",
        "bgi": "4p4MIZG60gGHChGtTDQMO8Afb9R",
        "dl": "https://pixeldrain.net/api/file/Xjd3986v?download",
        "link": "tt2442560",
        "year": "2013",
        "duration": "58 min",
        "rating": "8.8",
        "genre": "Crime, Drama",
        "description": "Tommy Shelby confronts rivals and personal struggles as he strengthens his criminal empire in this intense episode of Peaky Blinders.",
        "type": "series",
        "quality": "webdl"
    },
    {
            "title": "Good Bad Ugly [2025] WEB-DL [Hindi + Tamil] | Full Movie",
            "im": "8DbYYluzdiGDAZzsaP7DWGbwfLd",
            "bgi": "5CtvMLmCdksbYqqQd812WYML2wJ",
            "dl": "https://pixeldrain.net/api/file/gFSFRfDy?download",
            "link": "tt27540217",
            "year": "2025",
            "duration": "120 min",
            "rating": "7.3",
            "genre": "Action, Drama, Western",
            "description": "A lone gunslinger must navigate a brutal world full of criminals, lawmen, and betrayal as he seeks justice in the Wild West.",
            "type": "movie",
            "quality": "webdl"
        },
        {
            "title": "The Monkey [2025] WEB-DL [Hindi + English] | Full Movie",
            "im": "2nZE6f86GiJRGUGmIsBdVZVr5fx",
            "bgi": "270hd3fc6mlfr7rRAr5CROaJ43h",
            "dl": "https://pixeldrain.net/api/file/4YPbStUW?download",
            "link": "tt27714946",
            "year": "2025",
            "duration": "115 min",
            "rating": "6.8",
            "genre": "Adventure, Comedy, Family",
            "description": "A young boy befriends a magical monkey who can speak and transform, leading to a series of whimsical adventures.",
            "type": "movie",
            "quality": "webdl"
        },
        {
            "title": "Heretic [2024] WEB-DL [Hindi + English] | Full Movie",
            "im": "fr96XzlzsONrQrGfdLMiwtQjott",
            "bgi": "9ibmEMcrOhsiVA9V358WQJSNk84",
            "dl": "https://pixeldrain.net/api/file/WxydiNSW?download",
            "link": "tt28015403",
            "year": "2024",
            "duration": "110 min",
            "rating": "6.5",
            "genre": "Horror, Thriller",
            "description": "A group of adventurers explore an abandoned church in the deep woods, only to find that it holds a terrifying secret that forces them to fight for their lives.",
            "type": "movie",
            "quality": "webdl"
        },
        {
            "title": "Jaat [2025] WEB-DL [Hindi] | Full Movie",
            "im": "guTflsCTgLNqTbpHTi9gJANk1Rf",
            "bgi": "d49Rz7BDj8LmRMQI03mKBTwIpfr",
            "dl": "https://pixeldrain.net/api/file/sJunpwbg?download",
            "link": "tt32223398",
            "year": "2025",
            "duration": "125 min",
            "rating": "7.2",
            "genre": "Action, Drama",
            "description": "A powerful tale of a young man’s journey through family, honor, and vengeance as he rises to become a formidable force in the world of criminal enterprises.",
            "type": "movie",
            "quality": "webdl"
        },
        {
            "title": "Star Wars: Andor [Season 2] [Episode 6] WEB-DL [Hindi + English]",
            "im": "y0j9HbsWnkn1TlT6Y52ZrsvysgU",
            "bgi": "sPnH7hxLR0oisYKI1tQZ0Bcefgj",
            "dl": "https://pixeldrain.net/api/file/R57sQUSH?download",
            "link": "tt9253284",
            "year": "2025",
            "duration": "54 min",
            "rating": "9.0",
            "genre": "Action, Adventure, Sci-Fi",
            "description": "In this gripping episode, Cassian Andor faces mounting pressures from both the Empire and the Rebellion, making difficult choices that could change the course of the galaxy.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "Aghathiyaa [2025] WEB-DL [Hindi + Tamil] | Full Movie",
            "im": "gCXjEAJRaZZi5bMowWJQxK0827c",
            "bgi": "rBEZqpJpESse8GJUM5mxEiXJL0t",
            "dl": "https://pixeldrain.net/api/file/Hux1Ue7X?download",
            "link": "tt27217053",
            "year": "2025",
            "duration": "110 min",
            "rating": "7.4",
            "genre": "Drama, Thriller",
            "description": "A young man struggles with his personal demons and societal expectations, ultimately embarking on a path of self-discovery that leads him to a dramatic life-changing decision.",
            "type": "movie",
            "quality": "webdl"
        },
        {
            "title": "Kooman [2022] UNCUT WEB-DL [Hindi + Malayalam] | Full Movie",
            "im": "nhKiu5zi5rUjPwzEQCaLKfbDHrL",
            "bgi": "gbubOZbNg0L5VAYKnaAZVWxFqu7",
            "dl": "https://pixeldrain.net/api/file/fwKxTTRy?download",
            "link": "tt17632818",
            "year": "2022",
            "duration": "150 min",
            "rating": "7.5",
            "genre": "Crime, Drama, Mystery",
            "description": "A police officer is forced to confront his own dark past when he is assigned to investigate a series of brutal crimes that seem to be connected to his own life.",
            "type": "movie",
            "quality": "uncut webdl"
        },
        {
            "title": "Peaky Blinders [Season 1] [Episode 5] WEB-DL [Hindi + English]",
            "im": "vPlsKun2WZEsqe3yZTmebxtwElW",
            "bgi": "11HGUikej3bARNmp44vEnkBel5K",
            "dl": "https://pixeldrain.net/api/file/M6boShov?download",
            "link": "tt2442560",
            "year": "2013",
            "duration": "58 min",
            "rating": "8.8",
            "genre": "Crime, Drama",
            "description": "The Shelby family faces new rivalries and challenges as they strive to dominate the streets of Birmingham, with Tommy Shelby navigating dangerous territory.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "JoJos Bizarre Adventure [Season 1] [Episode 18] WEB-DL [Hindi + English + Japanese]",
            "im": "co0K9FS9rQPxPoKADs4nuGckk3A",
            "bgi": "jiNmwMUqX0AKaP20tyQ626E4dMK",
            "dl": "https://pixeldrain.net/api/file/3oEKYoKU?download",
            "link": "tt2359704",
            "year": "2012",
            "duration": "25 min",
            "rating": "8.4",
            "genre": "Action, Adventure, Animation",
            "description": "The battle intensifies as JoJo and his companions face increasingly powerful foes. Each episode reveals new twists and unexpected turns in the adventure.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "Last Night of Amore [2023] BluRay [Hindi + Italian] | Full Movie",
            "im": "dBp0REsZkZ1HK1PycwlLdBtYdsd",
            "bgi": "oZKQWDz6wP1bLZgPKwpcloU34sx",
            "dl": "https://pixeldrain.net/api/file/3L2BxdDD?download",
            "link": "tt20465746",
            "year": "2023",
            "duration": "98 min",
            "rating": "7.3",
            "genre": "Romance, Drama",
            "description": "Two strangers from different worlds share a night of unexpected love and connection, exploring the complexities of relationships and human emotions.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "Gangs of Wasseypur - Part 2 [2012] BluRay [Hindi] | Full Movie",
            "im": "4CVPyT10Cvw9BCgWNKXiRcXntuc",
            "bgi": "j1tqstmfOZWcaTsItedx18ebMlp",
            "dl": "https://pixeldrain.net/api/file/UBrqfJiV?download",
            "link": "tt32406320",
            "year": "2012",
            "duration": "161 min",
            "rating": "8.2",
            "genre": "Action, Crime, Drama",
            "description": "The intense continuation of the epic saga of power, revenge, and conflict between the two rival families in the violent world of Wasseypur.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "Gangs of Wasseypur - Part 1 [2012] BluRay [Hindi] | Full Movie",
            "im": "xAy208Znkingmfnb5ZbULwLyIwW",
            "bgi": "1CAyD1mFJvCgsbOKyYTP8hIBqGe",
            "dl": "https://pixeldrain.net/api/file/jgp5arXM?download",
            "link": "tt1954470",
            "year": "2012",
            "duration": "159 min",
            "rating": "8.2",
            "genre": "Action, Crime, Drama",
            "description": "The epic saga continues as the conflict between the Wasseypur gangs escalates into a bloody and intense war, filled with betrayal, revenge, and political intrigue.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "Drop [2025] WEB-DL [Hindi + English] | Full Movie",
            "im": "dS2S5lpfgRIRQOb7LDCjNsQqKjp",
            "bgi": "mi4DqTItM0jRHziKzdTmXZVcG4C",
            "dl": "https://pixeldrain.net/api/file/Cg5iHFCg?download",
            "link": "tt32149847",
            "year": "2025",
            "duration": "115 min",
            "rating": "6.7",
            "genre": "Thriller, Drama",
            "description": "A suspense-filled thriller where the main character is caught in a deadly conspiracy after accidentally uncovering dark secrets that powerful people want to keep hidden.",
            "type": "movie",
            "quality": "webdl"
        },
        {
            "title": "Peaky Blinders [Season 1] [Episode 4] WEB-DL [Hindi + English]",
            "im": "vPlsKun2WZEsqe3yZTmebxtwElW",
            "bgi": "ktATJ6sEfEqu6HfGpE9FD7WIjvq",
            "dl": "https://pixeldrain.net/api/file/pompH96N?download",
            "link": "tt2442560",
            "year": "2013",
            "duration": "58 min",
            "rating": "8.8",
            "genre": "Crime, Drama",
            "description": "Tommy Shelby navigates the criminal underworld, expanding the Peaky Blinders' influence while facing rising challenges from rival factions and personal enemies.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "The Last of Us [Season 2] [Episode 3] WEB-DL [Hindi + English] | HBO Series",
            "im": "dmo6TYuuJgaYinXBPjrgG9mB5od",
            "bgi": "yYxtVmduEAJWPyckZv4rqqinvoe",
            "dl": "https://pixeldrain.net/api/file/QVEgnjqW?download",
            "link": "tt3581920",
            "year": "2025",
            "duration": "60 min",
            "rating": "9.3",
            "genre": "Action, Adventure, Drama",
            "description": "In the third episode of Season 2, Ellie and Joel face terrifying new threats while dealing with the emotional weight of their journey in a post-apocalyptic world.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "Thudarum [2025] HQ-V2 HDTC [Malayalam] | Full Movie",
            "im": "uOTDBabtxHA6szYKQNQe9Y7rFlv",
            "bgi": "q6tHgBlYpesjUL9NumNoGpePaGT",
            "dl": "https://pixeldrain.net/api/file/VF7QbbaP?download",
            "link": "tt31969600",
            "year": "2025",
            "duration": "120 min",
            "rating": "6.9",
            "genre": "Action, Drama",
            "description": "In a thrilling tale of revenge and justice, a young man seeks to avenge the wrongs done to his family, while facing ruthless adversaries in his path.",
            "type": "movie",
            "quality": "hq-v2 hdtc"
        },
        {
            "title": "I Saw the TV Glow [2025] BluRay [Hindi + English] | Full Movie",
            "im": "ZZWbZCHeTpa330gSpX2vkp3YqV",
            "bgi": "bnIzcaSVPub9sAieMiOJErxopzV",
            "dl": "https://pixeldrain.net/api/file/BmFDMeiz?download",
            "link": "tt15574270",
            "year": "2025",
            "duration": "95 min",
            "rating": "7.4",
            "genre": "Horror, Mystery, Thriller",
            "description": "A chilling psychological horror where a group of people find themselves haunted by the strange and eerie TV shows that seem to affect their reality in disturbing ways.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "Suits LA [Season 1] [Episode 10] WEB-DL [Hindi + English]",
            "im": "3hYiNPkcLoI3QWDokOHQJIfn55O",
            "bgi": "ezQtyu9WD2MBW96awZqOY3pktX1",
            "dl": "https://pixeldrain.net/api/file/xqSReDbN?download",
            "link": "tt31122751",
            "year": "2025",
            "duration": "50 min",
            "rating": "8.2",
            "genre": "Drama, Legal",
            "description": "In the season finale, the legal team faces their biggest challenge yet, with high stakes and personal conflicts as they navigate their careers and relationships.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "The Divorce Insurance [Season 1] [Episode 7] WEB-DL [Hindi + English] | [Amazon Prime Video]",
            "im": "6HAbRWYkX3bouEeHA4bjsUxznKC",
            "bgi": "pYP1O7uwIsavdC3GgEtVuPo9ul9",
            "dl": "https://pixeldrain.net/api/file/71PZKvdj?download",
            "link": "tt35839843",
            "year": "2025",
            "duration": "45 min",
            "rating": "7.6",
            "genre": "Comedy, Drama",
            "description": "The characters' personal lives take a dramatic turn as they tackle unexpected challenges, uncovering deeper emotional layers in their relationships.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "Tuk Tuk [2025] BluRay [Hindi + Telugu] | Full Movie",
            "im": "AsUsLOZBMpb6zqofvt7yxcbJVEJ",
            "bgi": "ebH3EsvMF06KSjlKxZcCvGydvBH",
            "dl": "https://pixeldrain.net/api/file/r1yDgyHr?download",
            "link": "tt33088937",
            "year": "2025",
            "duration": "105 min",
            "rating": "7.0",
            "genre": "Comedy, Family",
            "description": "A lighthearted family comedy about a young boy's misadventures and the hilarious situations that arise as he tries to navigate through life with his quirky family.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "Live [2023] WEB-DL [Hindi + Malayalam] | Full Movie",
            "im": "lqkSwvAEiLj4nf8cDkkVptXTMIV",
            "dl": "https://pixeldrain.net/api/file/wqAgR36C?download",
            "link": "tt23903828",
            "year": "2023",
            "duration": "110 min",
            "rating": "6.5",
            "genre": "Drama, Thriller",
            "description": "A man embarks on a perilous journey to track down a long-lost loved one, uncovering deep secrets along the way. His journey becomes a battle against time and destiny.",
            "type": "movie",
            "quality": "webdl"
        },
        {
            "title": "Akaal: The Unconquered [2025] HDRip [Hindi] [HEVC] | Full Movie",
            "im": "pzf5rPLoE5DdYkcZlvYbrH554rE",
            "bgi": "",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Akaal.The.Unconquered.2025.Hindi.HDRip.720p.x264.AVC.HE-AAC.2.0.Vegamovies.is.mkv",
            "link": "tt35402446",
            "year": "2025",
            "duration": "135 min",
            "rating": "7.1",
            "genre": "Action, Drama, History",
            "description": "Set in a turbulent time, a legendary warrior defies overwhelming odds to fight for justice and honor. His journey embodies the spirit of resilience against an oppressive empire.",
            "type": "movie",
            "quality": "hdrip hevc"
        },
        {
            "title": "CiD [Season 2] [Episode 38] WEB-DL [Hindi]",
            "im": "60ZxbAMk6QO8jMD0p8WrGHVCbyK",
            "bgi": "aqyxAXhx6yTdKOlCRiiKM5TsXpp",
            "dl": "https://pixeldrain.net/api/file/cadQFjh6?download",
            "link": "tt0401916F",
            "year": "2025",
            "duration": "45 min",
            "rating": "8.0",
            "genre": "Crime, Mystery",
            "description": "The team at CID continues to unravel intricate mysteries, solving crimes that seem unsolvable. This episode delves into the psyche of a criminal mastermind.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "Paappan [2022] UNCUT WEB-DL [Hindi + Malayalam] | Full Movie",
            "im": "iaMF7onRosmkF6b9jaENzIZfauM",
            "bgi": "tIo3de0eHGDZkITmqkp1uiC7SR5",
            "dl": "https://pixeldrain.net/api/file/PP41vRtD?download",
            "link": "tt14056670",
            "year": "2022",
            "duration": "140 min",
            "rating": "7.6",
            "genre": "Crime, Thriller, Drama",
            "description": "A retired police officer is drawn into an unsolved case that is tied to his own past. As he dives deeper into the investigation, he faces dangerous foes and haunting memories.",
            "type": "movie",
            "quality": "uncut webdl"
        },
        {
            "title": "Spark: L.I.F.E. [2023] UNCUT WEB-DL [Hindi + Telugu] | Full Movie",
            "im": "zEvcGq7AsCJ7oCXVvtATTweE05o",
            "bgi": "7NkvagehAMj3Bip5hCBlFUmQHNs",
            "dl": "https://pixeldrain.net/api/file/b1JdQvVA?download",
            "link": "tt28526239",
            "year": "2023",
            "duration": "125 min",
            "rating": "7.0",
            "genre": "Drama, Sci-Fi",
            "description": "A young scientist grapples with his groundbreaking discoveries, balancing between scientific ambition and personal sacrifices. His innovations spark both hope and controversy.",
            "type": "movie",
            "quality": "uncut webdl"
        },
        {
            "title": "Ne Zha 2 [2025] CAMRIP [Hindi] | Full Movie",
            "im": "5lUmWTGkEcYnXujixXn31o9q2T0",
            "bgi": "rGHNPAdxdQ6UlZ6nltvux6INjJX",
            "dl": "https://pixeldrain.net/api/file/uTVDZmt3?download",
            "link": "tt34956443",
            "year": "2025",
            "duration": "105 min",
            "rating": "7.3",
            "genre": "Action, Animation, Fantasy",
            "description": "In this highly anticipated sequel, Ne Zha faces new challenges as he strives to protect his world from ancient forces threatening to destroy everything.",
            "type": "movie",
            "quality": "camrip"
        },
        {
            "title": "Peaky Blinders [Season 1] [Episode 3] WEB-DL [Hindi + English] [HEVC]",
            "im": "vPlsKun2WZEsqe3yZTmebxtwElW",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Peaky.Blinders.S01.E03.720p.10Bit.HEVC.BluRay.Hindi.2.0-English.2.0.ESub.x265-HDHub4u.Ms.mkv",
            "link": "tt2442560",
            "year": "2013",
            "duration": "58 min",
            "rating": "8.8",
            "genre": "Crime, Drama",
            "description": "Tommy Shelby continues to expand his criminal empire while facing new threats from rival gangs and the law. The episode is packed with tension, power struggles, and strategic decisions.",
            "type": "series",
            "quality": "webdl hevc"
        },
        {
            "title": "Valerian and the City of a Thousand Planets [2017] WEB-DL [Hindi] [HEVC] | Full Movie",
            "im": "vlc95gl3PtrjxSEuM8RhTtSm2xU",
            "dl": "https://pub-4f43d576c6ca4f9998fe276426dc5a19.r2.dev/Valerian.and.the.City.of.a.Thousand.Planets.2017.720p.10bit.BluRay.HIN-ENG.x265.ESub.Vegamovies.To.mkv",
            "link": "tt2239822",
            "year": "2017",
            "duration": "136 min",
            "rating": "6.5",
            "genre": "Action, Adventure, Sci-Fi",
            "description": "Valerian and his partner Laureline must navigate through a vast city in space, facing danger and uncovering a conspiracy that threatens the entire galaxy.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Wednesday [Season 1] WEB-DL [Hindi + English] [HEVC] | All Episodes",
            "im": "9PFonBhy4cQy7Jz20NpMygczOkv",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=VaGLPVSE&sn=1&es=Wednesday.S01.720p.10Bit.WEB-DL.Hindi.5.1-English.HEVC.x265-HDHub4u.Tv/Wednesday.S01.E&e=8&el=.720p.10Bit.WEB-DL.Hindi.5.1-English.HEVC.x265-HDHub4u.Tv.mkv",
            "link": "tt13443470",
            "year": "2022",
            "duration": "45 min per episode",
            "rating": "8.0",
            "genre": "Comedy, Horror, Mystery",
            "description": "Wednesday Addams navigates the complexities of adolescence while solving supernatural mysteries at Nevermore Academy, balancing humor, horror, and mystery.",
            "type": "series",
            "quality": "webdl hevc"
        },
        {
            "title": "Jamtara - Sabka Number Ayega [Season 2] WEB-DL [Hindi] | All Episodes",
            "im": "ewCGnOz5VBhT8CD8NTSvo9OLybW",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=oDM9dDB1&sn=2&es=Jamtara.-.Sabka.Number.Ayega.S02.720p.WEB-DL.AAC.5.1.ESub.x264-HDHub4u.TV/Jamtara.-.Sabka.Number.Ayega.S02E&e=8&el=.720p.WEB-DL.AAC.5.1.ESub.x264-HDHub4u.TV.mkv",
            "link": "tt11150912",
            "year": "2022",
            "duration": "40 min per episode",
            "rating": "7.8",
            "genre": "Crime, Drama, Thriller",
            "description": "The con artists from Jamtara are back with new tricks and challenges. As the stakes get higher, the battle between law enforcement and scammers intensifies.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "Weak Hero [Season 2] WEB-DL [Hindi + English] | All Episodes",
            "im": "aW7mGixv2dZdQtbve4deYyfewHH",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=ZVJGh1Po&sn=2&es=Weak.Hero.S02.720p.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ms/Weak.Hero.S02E&e=6&el=.720p.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ms.mkv",
            "link": "tt20234568",
            "year": "2025",
            "duration": "50 min per episode",
            "rating": "7.9",
            "genre": "Action, Drama, Thriller",
            "description": "In the second season, the protagonist, once perceived as weak, faces increasing challenges as he fights against bullies and corrupt systems, developing into a stronger individual.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "Ayyana Mane [Season 1] WEB-DL [Hindi + English] | All Episodes",
            "im": "ktGeo5XTYoR0jxnIFjcdzlxW1Ol",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=7RoQv45n&sn=1&es=Ayyana.Mane.S01.720p.WEB-DL.Hindi.5.1-Kannada.5.1.ESub.x264-HDHub4u.Ms/Ayyana.Mane.S01E&e=6&el=.720p.WEB-DL.Hindi.5.1-Kannada.5.1.ESub.x264-HDHub4u.Ms.mkv",
            "link": "tt36507686",
            "year": "2025",
            "duration": "45 min per episode",
            "rating": "7.4",
            "genre": "Drama, Family",
            "description": "The life of a young girl, Ayyana, who struggles with societal norms, family pressure, and her dreams, unfolds in a gripping story of resilience and hope.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "Ground Zero [2025] HQ-V2 HDTC [Hindi] [HEVC] | Full Movie",
            "im": "dZILOHlX1LfboYsaeDMdMwdF5nN",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Ground-Zero.2025.720p.HEVC.HDTC.Hindi-ORG.x265-HDHub4u.Ms.mkv",
            "link": "tt28377588",
            "year": "2025",
            "duration": "115 min",
            "rating": "6.9",
            "genre": "Action, Thriller",
            "description": "A team of elite soldiers is sent to the epicenter of a catastrophic event. What starts as a mission to secure a location turns into a fight for survival.",
            "type": "movie",
            "quality": "hq-v2 hdtc"
        },
        {
            "title": "Jewel Thief - The Heist Begins [2025] WEB-DL [Hindi] [HEVC] | Full Movie",
            "im": "eujLbO0kf1eqWC8XpHUJdtAVW2J",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Jewel.Thief.The.Heist.Begins.2025.720p.10Bit.Hindi.WEB-DL.5.1.HEVC.x265-HDHub4u.Ms.mkv",
            "link": "tt27843798",
            "year": "2025",
            "duration": "120 min",
            "rating": "7.5",
            "genre": "Crime, Thriller",
            "description": "A skilled jewel thief begins his heist journey, evading authorities and facing deadly challenges. Tensions rise as he attempts to pull off the perfect crime.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Havoc [2025] WEB-DL [Hindi + English] [HEVC] | Full Movie",
            "im": "r46leE6PSzLR3pnVzaxx5Q30yUF",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Havoc.2025.720p.10Bit.WEB-DL.Hindi.5.1-English.HEVC.x265-HDHub4u.Ms.mkv",
            "link": "tt14123284",
            "year": "2025",
            "duration": "130 min",
            "rating": "7.6",
            "genre": "Action, Drama, Thriller",
            "description": "A former special forces operative seeks revenge on those who destroyed his life, finding himself caught in a web of corruption and violent confrontations.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Ash [2025] WEB-DL [Hindi + English] [HEVC] | Full Movie",
            "im": "5Oz39iyRuztiA8XqCNVDBuy2Ut3",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Ash.2025.720p.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ms.mkv",
            "link": "tt17489650",
            "year": "2025",
            "duration": "115 min",
            "rating": "7.3",
            "genre": "Drama, Action",
            "description": "A fiery drama about Ash, a man whose past catches up with him as he embarks on a mission to rectify the mistakes of his earlier life.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Mad Square [2025] WEB-DL [Hindi] [HEVC] | Full Movie",
            "im": "lpDIBzzkyFoDqWTh46OqUEuGVxS",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Mad.Square.2025.720p.HEVC.WEB-DL.Hindi.5.1-Telugu.ESub.x265-HDHub4u.Ms.mkv",
            "link": "tt32327574",
            "year": "2025",
            "duration": "110 min",
            "rating": "6.8",
            "genre": "Action, Mystery, Drama",
            "description": "In a world of corruption and conspiracy, a man must navigate through a series of challenges that test his sanity and determination.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Absolution [2024] WEB-DL [Hindi] [HEVC] | Full Movie",
            "im": "gt70JOD9xsPlpJnuBJAWdOT4yRg",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Absolution.2024.720p.10Bit.BluRay.Hindi.2.0-English.HEVC.x265-HDHub4u.Ms.mkv",
            "link": "tt8337290",
            "year": "2024",
            "duration": "125 min",
            "rating": "7.4",
            "genre": "Action, Thriller",
            "description": "A retired assassin must face his past when his former enemies come after him. With his life on the line, he must navigate treacherous alliances and deadly encounters.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Peaky Blinders [Season 1] [Episode 2] WEB-DL [Hindi + English] [HEVC]",
            "im": "vPlsKun2WZEsqe3yZTmebxtwElW",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Peaky.Blinders.S01.E02.720p.10Bit.HEVC.BluRay.Hindi.2.0-English.2.0.ESub.x265-HDHub4u.Ms.mkv",
            "link": "tt2442560",
            "year": "2013",
            "duration": "58 min",
            "rating": "8.8",
            "genre": "Crime, Drama",
            "description": "Tommy Shelby faces new challenges and expands the Peaky Blinders' empire. Rivals are closing in, and he must use all his cunning to stay ahead.",
            "type": "series",
            "quality": "webdl hevc"
        },
        {
            "title": "You [Season 5] WEB-DL [Hindi + English] [HEVC] | All Episodes",
            "im": "vzgsobZmNxJyJ64ejTOUXvJ9UBn",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=RjT9BADy&sn=6&es=YOU.S05.720p.10Bit.HEVC.WEB-DL.Hindi.5.1-English.5.1.ESub.x265-HDHub4u.Ms/You.S05E&e=10&el=..720p.10Bit.HEVC.WEB-DL.Hindi.5.1-English.5.1.ESub.x265-HDHub4u.Ms.mkv",
            "link": "tt7335184",
            "year": "2025",
            "duration": "45 min per episode",
            "rating": "8.5",
            "genre": "Drama, Thriller, Crime",
            "description": "In the fifth season, Joe Goldberg grapples with his obsession with love and control, facing darker consequences as he delves deeper into dangerous relationships.",
            "type": "series",
            "quality": "webdl hevc"
        },
        {
            "title": "Samajavaragamana [2025] WEB-DL [Hindi] [HEVC] | Full Movie",
            "im": "fuyNHfcDJVwLfhgjHYmXlQZyK93",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Samajavaragamana.2023.720p.HEVC.Hindi.WEB-DL.ESub.x265-HDHub4u.Ms.mkv",
            "link": "tt26699538",
            "year": "2025",
            "duration": "110 min",
            "rating": "7.1",
            "genre": "Romance, Comedy, Drama",
            "description": "A heartfelt story about a man who struggles to balance his career and family life while navigating the trials of love and personal growth.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Veera Dheera Sooran: Part 2 [2025] WEB-DL [Hindi + Tamil] [HEVC] | Full Movie",
            "im": "a3dBrs38ame4Wm4AG94l4RdNwBQ",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Veera.Dheera.Sooran.Part.2.2025.720p.HEVC.WEB-DL.Hindi-Tamil.ESub.x265-HDHub4u.Ms.mkv",
            "link": "tt29606499",
            "year": "2025",
            "duration": "130 min",
            "rating": "7.2",
            "genre": "Action, Drama, Adventure",
            "description": "The saga continues as Veera Dheera Sooran embarks on a final battle against enemies who are determined to seize his kingdom. Filled with thrilling action, this movie concludes an epic story of bravery and sacrifice.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Peaky Blinders [Season 1] [Episode 1] WEB-DL [Hindi + English] [HEVC]",
            "im": "vPlsKun2WZEsqe3yZTmebxtwElW",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Peaky.Blinders.S01.E01.720p.10Bit.HEVC.BluRay.Hindi.2.0-English.2.0.ESub.x265-HDHub4u.Ms.mkv",
            "link": "tt2442560",
            "year": "2013",
            "duration": "58 min",
            "rating": "8.8",
            "genre": "Crime, Drama",
            "description": "In the first episode of this gripping series, Tommy Shelby leads the Peaky Blinders gang, navigating the dangerous world of post-WWI Birmingham while dealing with power struggles, loyalty, and betrayal.",
            "type": "series",
            "quality": "webdl hevc"
        },
        {
            "title": "Kodai Diaries [Season 1] WEB-DL [Hindi + English] | All Episodes",
            "im": "sG90D0atz26PcWVFcUYSbL2mUtu",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=cZqDbvJr&sn=1&es=Kodai.Diaries.S01.720p.Hindi.WEB-DL.2.0.ESub.x264-HDHub4u.Ms/Kodai.Diaries.S01E&e=6&el=.720p.Hindi.WEB-DL.2.0.ESub.x264-HDHub4u.Ms.mkv",
            "link": "",
            "year": "2025",
            "duration": "40 min per episode",
            "rating": "7.0",
            "genre": "Drama, Adventure",
            "description": "A heartfelt drama that follows a group of friends exploring the mountains of Kodai, where they learn valuable life lessons, face challenges, and uncover hidden secrets in the serene yet adventurous landscapes.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "Star Wars: Andor [Season 2] [Episode 3] WEB-DL [Hindi + English] [HEVC]",
            "im": "y0j9HbsWnkn1TlT6Y52ZrsvysgU",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Andor.S02E03.720p.10Bit.WEB-DL.Hindi.5.1-English.HEVC.x265-HDHub4u.Ms.mkv",
            "link": "tt9253284",
            "year": "2025",
            "duration": "55 min",
            "rating": "9.0",
            "genre": "Action, Adventure, Sci-Fi",
            "description": "Cassian Andor faces new dangers as he becomes deeply involved in the Rebellion's struggle against the Empire. The third episode further develops the complex relationships and challenges that will shape the Rebellion.",
            "type": "series",
            "quality": "webdl hevc"
        },
        {
            "title": "Bullet Train Explosion [2025] WEB-DL [Hindi + English] [HEVC] | Full Movie",
            "im": "iLXp24WqbbGlMOgoj7AheJgftxi",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Bullet.Train.Explosion.2025.720p.HEVC.WEB-DL.Hindi-English.ESub.x265-HDHub4u.Ms.mkv",
            "link": "tt33452974",
            "year": "2025",
            "duration": "120 min",
            "rating": "6.8",
            "genre": "Action, Thriller",
            "description": "A fast-paced action movie where a group of passengers on a high-speed bullet train must survive when terrorists take control of the train, leading to a high-stakes battle for survival.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Counterattack [2022] WEB-DL [Hindi + English] [HEVC] | Full Movie",
            "im": "38I76hGcFY6xB47pjm7pZwkfuAF",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Counterattack.2025.720p.10Bit.WEB-DL.Hindi.5.1-English.HEVC.x265-HDHub4u.Ms.mkv",
            "link": "tt23648788",
            "year": "2022",
            "duration": "110 min",
            "rating": "7.3",
            "genre": "Action, Crime, Thriller",
            "description": "A tactical thriller about an ex-soldier who gets drawn into a dangerous game of espionage and conspiracy when his life is put on the line by shadowy forces.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Attack on Titan OAD [Season 1] WEB-DL [Hindi + English] | All Episodes",
            "im": "no3dkH44ywREi0la8tw4TnA1GxN",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=u4m9KEYS&sn=1&es=Attack.on.Titan.OAD.S01E&e=8&el=.720p.HIN-JAP.x265.ESub-PikaHD.com.mkv",
            "link": "tt7950670",
            "year": "2025",
            "duration": "20 min per episode",
            "rating": "8.6",
            "genre": "Action, Animation, Drama",
            "description": "The additional episodes of Attack on Titan expand the lore, providing fans with deeper insights into the world of Titans, their origins, and the battles that shape the future of humanity.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "The Cleaner [2022] WEB-DL [Hindi + Thai] | Full Movie",
            "im": "s2JYyjCqcD5SlNoMCWgYpCzRKZn",
            "dl": "https://pixeldrain.net/api/file/ByXp8TKP?download",
            "link": "tt21223328",
            "year": "2022",
            "duration": "90 min",
            "rating": "6.9",
            "genre": "Action, Crime, Thriller",
            "description": "A skilled cleaner is tasked with cleaning up the aftermath of a brutal crime, only to discover that the case is connected to his own dark past.",
            "type": "movie",
            "quality": "webdl"
        },
        {
            "title": "WWE WrestleMania 41: Sunday [2025] WEB-DL [Hindi + English] | Full Event",
            "im": "ngRfoPVEEI36COa5TVf1vrv57Ia",
            "dl": "https://pub-e70d344c885b4dc8b57686064a1a5f68.r2.dev/WWE.Wrestlemania.41.Sunday.2025.720p.WEB-DL.HINDI.ENGLISH.AAC2.0.Esubs.H.264-HDHub4u.Ms.mkv",
            "link": "tt32283598",
            "year": "2025",
            "duration": "5 hours",
            "rating": "8.5",
            "genre": "Sports, Entertainment",
            "description": "The biggest event in wrestling history, featuring high-profile matches between top WWE stars. Sunday night brings thrilling showdowns and electrifying moments.",
            "type": "event",
            "quality": "webdl"
        },
        {
            "title": "WWE WrestleMania 41: Saturday [2025] WEB-DL [Hindi + English] | Full Event",
            "im": "jzPK38qZBUxbsegnF5MlqLdaEFq",
            "dl": "https://pub-f2eef84a5a02484ebe1c5a3453522556.r2.dev/WWE.Wrestlemania.41.Saturday.2025.720p.WEB-DL.HINDI.AAC2.0.Esubs.H.264-HDHub4u.Ms.mkv",
            "link": "tt32283598",
            "year": "2025",
            "duration": "5 hours",
            "rating": "8.5",
            "genre": "Sports, Entertainment",
            "description": "The Saturday portion of WWE WrestleMania 41 featuring the kickoff matches and exhilarating moments. The energy builds for the main event on Sunday.",
            "type": "event",
            "quality": "webdl"
        },
        {
            "title": "Panchayat [Season 2] WEB-DL [Hindi] [HEVC] | All Episodes",
            "im": "7boJeO6mV4Q69Tjx14CylvqkXZP",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=k2RTtZQD&sn=2&es=Panchayat.S02.720p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Tv/Panchayat.S02.E&e=8&el=.720p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Tv.mkv",
            "link": "tt12004706",
            "year": "2025",
            "duration": "30 min per episode",
            "rating": "8.5",
            "genre": "Comedy, Drama",
            "description": "The second season of Panchayat continues the hilarious and heartwarming journey of Abhishek as he navigates life in a rural village. His journey with quirky village personalities continues.",
            "type": "series",
            "quality": "webdl hevc"
        },
        {
            "title": "Panchayat [Season 1] WEB-DL [Hindi] [HEVC] | All Episodes",
            "im": "sx3MJ4ATkSoCyqayqco0O6wUqQ2",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?pd=5KqiFtHE&sn=1&es=Panchayat.S01.720p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Tv/Panchayat.S01.E&e=8&el=.720p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Tv.mkv",
            "link": "tt12004706",
            "year": "2025",
            "duration": "30 min per episode",
            "rating": "8.5",
            "genre": "Comedy, Drama",
            "description": "The first season of Panchayat follows Abhishek, an urban graduate, as he adjusts to his new role in a rural village. A comedy-drama about relationships, humor, and life lessons.",
            "type": "series",
            "quality": "webdl hevc"
        },
        {
            "title": "Suits LA [Season 1] [Episode 9] WEB-DL [Hindi + English]",
            "im": "3hYiNPkcLoI3QWDokOHQJIfn55O",
            "dl": "https://pub-c457a64d90034e34aba3bb1cb1734650.r2.dev/Suits.L.A.S01E09.720p.WEB.DL.Hindi.2.0.English.5.1.ESub.x264.HDHub4u.Ms.mkv",
            "link": "tt31122751",
            "year": "2025",
            "duration": "45 min",
            "rating": "8.1",
            "genre": "Drama, Legal",
            "description": "The 9th episode of Suits LA season 1 showcases intense legal battles and personal conflicts as the legal team tries to navigate through high-stakes cases and their complicated relationships.",
            "type": "series",
            "quality": "webdl"
        },
        {
            "title": "The Last of Us [Season 2] [Episode 2] WEB-DL [Hindi + English] [HEVC] | HBO Series",
            "im": "dmo6TYuuJgaYinXBPjrgG9mB5od",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/The.Last.of.Us.S02E02.720p.10Bit.WEB-DL.Hindi.2.0-English.HEVC.x265-HDHub4u.Ms.mkv",
            "link": "tt3581920",
            "year": "2025",
            "duration": "60 min",
            "rating": "9.2",
            "genre": "Action, Drama, Adventure",
            "description": "The second episode of The Last of Us season 2 dives deeper into the complex relationships between the survivors as they face an increasingly dangerous world filled with infected and hostile humans.",
            "type": "series",
            "quality": "webdl hevc"
        },
        {
            "title": "Disco Raja [2020] WEB-DL UNCUT [Hindi - HQ/Studio Dub] [HEVC] | Full Movie",
            "im": "cT0BUuzJJ9jvQD79Po7v7vGjdQH",
            "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d10=xVNITBPR6g",
            "link": "tt9664732",
            "year": "2020",
            "duration": "130 min",
            "rating": "6.9",
            "genre": "Action, Sci-Fi, Thriller",
            "description": "In this high-octane action film, Disco Raja must fight against powerful enemies after he is revived in a new body, with high-tech enhancements and a mission to uncover the truth behind his death.",
            "type": "movie",
            "quality": "webdl uncut"
        },
        {
            "title": "Solo Leveling [Season 2] [Episode 13] WEB-DL [Hindi + English + Japanese] [HEVC]",
            "im": "geCRueV3ElhRTr0xtJuEWJt6dJ1",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Solo%20Leveling-S02E13-720p-[HIN-ENG-JAP]-PIKAHD.COM.mkv",
            "link": "tt21209876",
            "year": "2025",
            "duration": "25 min",
            "rating": "8.6",
            "genre": "Action, Fantasy, Adventure",
            "description": "The latest episode of Solo Leveling features intense battles, as the protagonist continues to face powerful enemies in the dungeon. The stakes get higher as new alliances and rivalries emerge.",
            "type": "series",
            "quality": "webdl hevc"
        },
        {
            "title": "Kesari Chapter 2: The Untold Story of Jallianwala Bagh [2025] HQ-HDTC [Hindi-LiNE] [HEVC] | Full Movie",
            "im": "jgGSqe1YgSot6Y1zDVTVkbsZ46z",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Kesari-Chapter-2.2025.720p.HEVC.HDTC.Hindi-Line.HC-ESub.x265-HDHub4u.Ms.mkv",
            "link": "tt3562110",
            "year": "2025",
            "duration": "125 min",
            "rating": "7.7",
            "genre": "History, Drama, War",
            "description": "The untold story of the Jallianwala Bagh massacre, and the subsequent impact on India's fight for independence. The untold sacrifices of the unsung heroes of this event unfold.",
            "type": "movie",
            "quality": "hq-hdtc hevc"
        },
        {
            "title": "Kesari [2019] WEB-DL [Hindi] [HEVC] | Full Movie",
            "im": "ctjT1pMNAGD9ou0kuhz806tf7kX",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Kesari.2019.720p.10Bit.BluRay.Hindi.2.0.HEVC.x265-HDHub4u.Ms.mkv",
            "link": "tt6264938",
            "year": "2019",
            "duration": "140 min",
            "rating": "7.7",
            "genre": "Action, Drama, History",
            "description": "The story of Havildar Ishar Singh who leads 21 Sikh soldiers against 10,000 Afghan invaders in the Battle of Saragarhi. A tale of bravery, honor, and patriotism.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Sikandar [2025] WEB-DL [Hindi] [HEVC] | Full Movie",
            "im": "41s42CRXafa3OuRGvCtfYPEBmse",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Sikandar.2025.720p.HEVC.Hindi.DS4K.WEB-DL.HC-ESub.x265-HDHub4u.Ms.mkv",
            "link": "tt31712434",
            "year": "2025",
            "duration": "135 min",
            "rating": "6.8",
            "genre": "Action, Drama",
            "description": "A gripping action-packed drama where Sikandar, a man torn between loyalty and revenge, embarks on a dangerous journey to reclaim his honor and face his inner demons.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "Logout [2025] WEB-DL [Hindi] [HEVC] | Full Movie",
            "im": "2Z8sd660MRnSKN60EpKYpLQvdLV",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Logout.2025.720p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Ms.mkv",
            "link": "tt27721892",
            "year": "2025",
            "duration": "110 min",
            "rating": "7.4",
            "genre": "Thriller, Drama",
            "description": "A suspense thriller that follows a group of friends trapped in a virtual world after a cyber-attack. They must work together to escape before time runs out.",
            "type": "movie",
            "quality": "webdl hevc"
        },
        {
            "title": "iHostage [2025] WEB-DL [Hindi + English] | Full Movie",
            "im": "h87bgIhs4keL005Ch5aeKhnaAIL",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/iHostage.2025.720p.WEB-DL.Hindi.5.1-English.5.1.ESub.x264-HDHub4u.Ms.mkv",
            "link": "tt31181421",
            "year": "2025",
            "duration": "120 min",
            "rating": "7.5",
            "genre": "Action, Crime, Thriller",
            "description": "A high-stakes thriller about a tech expert who gets kidnapped and forced into hacking a high-security system, while trying to outsmart his captors and escape.",
            "type": "movie",
            "quality": "webdl"
        },
        {
            "title": "The Lion King [1994] Blu-Ray [Hindi + English] | Full Movie",
            "im": "sKCr78MXSLixwmZ8DyJLrpMsd15",
            "dl": "https://pub-70279e580f3742208cef0a4a382e6318.r2.dev/The.Lion.King.1994.720p.HindiEnglish.[Vegamovies.NL].mkv",
            "link": "tt0110357",
            "year": "1994",
            "duration": "88 min",
            "rating": "8.5",
            "genre": "Animation, Adventure, Drama",
            "description": "The animated classic about Simba, a young lion prince who overcomes adversity to take his rightful place as king of the Pride Lands, filled with lessons on responsibility and courage.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "The Twilight Saga: Breaking Dawn - Part 2 [2012] Blu-Ray [Hindi + English] | Full Movie",
            "im": "7IGdPaKujv0BjI0Zd0m0a4CzEjJ",
            "dl": "https://pub-56459ca234e34b598d0440d1c764d942.r2.dev/Twilight.Breaking.Dawn.Part2.2012.720p.Dual.Audio.Hin-Eng.[Vegamovies.NL].mkv",
            "link": "tt1673434",
            "year": "2012",
            "duration": "115 min",
            "rating": "5.5",
            "genre": "Adventure, Drama, Fantasy",
            "description": "The final chapter in the Twilight saga, where Bella, Edward, and Jacob face the aftermath of Bella’s transformation and prepare for the ultimate confrontation with the Volturi.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "Shrek 2 [2004] Blu-Ray [Hindi + English] | Full Movie",
            "im": "2yYP0PQjG8zVqturh1BAqu2Tixl",
            "dl": "https://pub-be1ceb9f72804dad809dfe89e9f02f4d.r2.dev/Shrek.2.2004.720p.Dual.Audio.Hin-Eng.Vegamovies.to.mkv",
            "link": "tt0298148",
            "year": "2004",
            "duration": "93 min",
            "rating": "7.2",
            "genre": "Animation, Adventure, Comedy",
            "description": "Shrek and Fiona go on an adventurous journey to meet Fiona’s parents, leading to comical and heartfelt moments in this animated sequel filled with laughter and lessons about family and acceptance.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "Mission: Impossible - Fallout [2018] Blu-Ray [Hindi + English] | Full Movie",
            "im": "AkJQpZp9WoNdj7pLYSj1L0RcMMN",
            "dl": "https://pixeldra.in/api/file/CyKpoFxS/info/zip/MI.6.Fallout.(2018).720p.Bluray.(Hin-Eng).Vegamovie.NL.mkv",
            "link": "tt4912910",
            "year": "2018",
            "duration": "147 min",
            "rating": "7.7",
            "genre": "Action, Adventure, Thriller",
            "description": "Ethan Hunt faces the most dangerous mission of his career when he must retrieve stolen plutonium and prevent a catastrophic disaster, while confronting his own past.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "Pirates of the Caribbean: Dead Man's Chest [2006] Blu-Ray [Hindi + English] | Full Movie",
            "im": "lAhcKRt0ggTFkeFL95jrGQYaRXs",
            "dl": "https://pub-daa17c72a73245618ba0f7e56be7e9d6.r2.dev/Pirates.of.the.Caribbean.2006.Dead.Man.Chest.720p.Hindi.English.Vegamovies.NL.mkv",
            "link": "tt0383574",
            "year": "2006",
            "duration": "151 min",
            "rating": "7.3",
            "genre": "Action, Adventure, Fantasy",
            "description": "Captain Jack Sparrow returns as he embarks on a quest to find the Dead Man's Chest, a mission that pits him against new enemies and tests his wits and courage.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "Transformers 3: Dark of the Moon [2011] Blu-Ray [Hindi + English] | Full Movie",
            "im": "28YlCLrFhONteYSs9hKjD1Km0Cj",
            "dl": "https://pub-551c8cc624b84e299e089878f55ec2c6.r2.dev/Transformers%20Dark%20of%20the%20Moon%202011%20Dual%20Audio%20Hindi-English%20720p%20BluRay%201.3GB%20ESub%20[Vegamovies.NL].mkv",
            "link": "tt1399103",
            "year": "2011",
            "duration": "154 min",
            "rating": "6.2",
            "genre": "Action, Adventure, Sci-Fi",
            "description": "The Autobots discover a Cybertronian spacecraft on Earth's moon and race against the Decepticons to reach it and learn its secrets, leading to a battle for Earth's survival.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "Despicable Me 4 [2024] WEB-DL [Hindi + English] | Full Movie",
            "im": "wWba3TaojhK7NdycRhoQpsG0FaH",
            "dl": "https://pub-8a88776bc0824abca371fead62c3fbd2.r2.dev/Despicable.Me.4.2024.720p.x264.AMZN.Hindi.English.Esubs.MoviesMod.band.mkv",
            "link": "tt7510222",
            "year": "2024",
            "duration": "105 min",
            "rating": "7.1",
            "genre": "Animation, Adventure, Comedy",
            "description": "Gru and his mischievous Minions are back in this hilarious adventure where they face new challenges, embark on wild escapades, and learn valuable lessons about family and friendship.",
            "type": "movie",
            "quality": "webdl"
        },
        {
            "title": "The Hobbit: The Battle of the Five Armies [2014] Blu-Ray [Hindi + English] | Full Movie",
            "im": "xT98tLqatZPQApyRmlPL12LtiWp",
            "dl": "https://pub-e316b66701dc4d2ebe99358c64f6be6a.r2.dev/The.Hobbit.3.2014.720p.Dual.Audio.Hin.Eng.Vegamovies.NL.mkv",
            "link": "tt2310332",
            "year": "2014",
            "duration": "144 min",
            "rating": "7.4",
            "genre": "Action, Adventure, Fantasy",
            "description": "The final battle for Middle-Earth begins as Thorin Oakenshield and his companions face the massive armies of orcs and goblins, while Bilbo Baggins must overcome his fears to protect his friends.",
            "type": "movie",
            "quality": "bluRay"
        },
        {
            "title": "The Lord of the Rings: The Return of the King [2003] EXTENDED Blu-Ray [Hindi + English] [HEVC] | Full Movie",
            "im": "rCzpDGLbOoPwLjy3OAm5NUPOTrC",
            "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/The.Lord.of.the.Rings.The.Return.of.the.King.2003.Extended.Cut.720p.10Bit.BluRay.Hindi.2.0-English.HEVC.x265-HDHub4u.Tv.mkv",
            "link": "tt0167260",
            "year": "2003",
            "duration": "263 min",
            "rating": "8.9",
            "genre": "Action, Adventure, Drama",
            "description": "The epic conclusion to the Lord of the Rings trilogy, where Frodo and Sam continue their perilous journey to destroy the One Ring, while Aragorn leads the fight to reclaim Middle-Earth.",
            "type": "movie",
            "quality": "bluRay hevc"
        },
    
    {
    title:'Jurassic Park [1993] WEB-DL [Hindi + English] [HEVC] | Full Movie',
    im:'fjTU1Bgh3KJu4aatZil3sofR2zC',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Jurassic.Park.1993.720p.BluRay.Hindi.English.DD.5.1.x264.ESubs.mkv',
    link: 'tt0107290'
    },
    
    {
    title:'The BatMan [2022] WEB-DL [Hindi + English] [HEVC] | Full Movie',
    im:'74xTEgt7R36Fpooo50r9T25onhq',
    dl:'https://pixeldrain.net/api/file/kbDGHAev?download',
    link: 'tt1877830'
    },
    
    {
    title:'James Bond: No Time to Die [2021] WEB-DL [Hindi] [HEVC] | Full Movie',
    im:'iUgygt3fscRoKWCV1d0C7FbM9TP',
    dl:'https://pub-3b9ee45a75314668a4034b1889e8d9f5.r2.dev/No.Time.To.Die.2021.720p.HEVC.BluRay.Hindi.ORG-English.ESub.x265-Vegamovies.NL.mkv',
    link: 'tt2382320'
    },
    
    {
    title:'Mere Husband Ki Biwi [2025] WEB-DL [Hindi] [HEVC] | Full Movie',
    im:'fQMBYG4JOD6WN8QzViPYqxuIsru',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Mere.Husband.Ki.Biwi.2025.720p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Ms.mkv',
    link: 'tt22457506'
    },
    
    {
    title:'JoJos Bizarre Adventure [Season 1] [Episode 7] WEB-DL [Hindi + English + Japanese] [HEVC]',
    im:'co0K9FS9rQPxPoKADs4nuGckk3A',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/JoJo.Bizarre.Adventure.S01E07.720p.HIN-ENG-JAP.ESub-PikaHD.com.mkv',
    link: 'tt2359704'
    },
    
    {
    title: 'Solo Leveling [Season 2] [Episode 12] WEB-DL [Hindi + English + Japanese] [HEVC]',
    im:'geCRueV3ElhRTr0xtJuEWJt6dJ1',
    dl: 'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Solo%20Leveling-S02E12-720p-[HIN-ENG-JAP]-PIKAHD.COM.mkv',
    link: 'tt21209876'
    },
    
    {
    title: 'Solo Leveling [Season 2] [Episode 11] WEB-DL [Hindi + English + Japanese] [HEVC]',
    im:'geCRueV3ElhRTr0xtJuEWJt6dJ1',
    dl: 'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Solo%20Leveling-S02E11-S02E11-720p-HEVC-[HIN-ENG-JAP]-PIKAHD.COM.mkv',
    link: 'tt21209876'
    },
    
    {
    title: 'Solo Leveling [Season 2] [Episode 10] WEB-DL [Hindi + English + Japanese] [HEVC]',
    im:'geCRueV3ElhRTr0xtJuEWJt6dJ1',
    dl: 'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Solo%20Leveling-S02E10-720p-HEVC-[HIN-ENG-JAP]-PIKAHD.COM.mkv',
    link: 'tt21209876'
    },
    
    {
    title:'Khauf [Season 1] [All Episodes] WEB-DL [Hindi + English] [HEVC] | Full Series',
    im:'puwKd7W9iCocEy11Z1XJ5sN2RaG',
    dl:'https://hubcloud.bz/drive/gtx85wtvq84wxx3',
    link: 'tt31898201'
    },
    
    {
    title:'Ransom Canyon [Season 1] [All Episodes] WEB-DL [Hindi + English] | Full Series',
    im:'xrlDfDANWEaNWBlQsxTgmVI8Q7W',
    dl:'https://hubcloud.bz/drive/cktz1tjsrprlrpv',
    link: 'tt28088031'
    },
    
    {
    title:'L2: Empuraan [2025] WEB-DL [Hindi + Malayalam + Tamil + Telugu] [HEVC] | Full Movie',
    im:'rArCWk29zrzOMyItB6AuGWro6DJ',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/L2-Empuran.2025.720p.HEVC.WEB-DL.Hindi.ORG-Multi.HC-ESub.x265-HDHub4u.Ms.mkv',
    link: 'tt10505918'
    },
    
    {
    title:'Fantastic Beasts 3: The Secrets of Dumbledore [2022] WEB-DL [Hindi + English] [HEVC] | Full Movie',
    im:'3c5GNLB4yRSLBby0trHoA1DSQxQ',
    dl:'https://pub-1935c4bb964d40cda9ebcc86a1ed7de3.r2.dev/Fantastic%20Beasts%20The%20Secrets%20of%20Dumbledore%202022%20Hindi%20Dubbed%20ORG%205.1%20DD%20[Dual%20Audio]%20720p%2010Bit%20HEVC%20-%20Vegamovies.NL.mkv',
    link: 'tt4123432'
    },
    
    
    {
    title:'Harry Potter and the Deathly Hallows: Part 2 [2011] Blu-Ray [Hindi + English] [HEVC] | Full Movie',
    im:'c54HpQmuwXjHq2C9wmoACjxoom3',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Harry.Potter.and.the.Deathly.Hallows.Part.2.2011.720p.10Bit.BluRay.Hindi.2.0-English.HEVC.x265-HDHub4u.Tv.mkv',
    link: 'tt1201607'
    },
    
    {
    title:'The Wheel of Time [Season 3] [Episode 8] WEB-DL [Hindi + English] [HEVC] | Amazon Prime Video',
    im:'bJSv3kF8wWmdsXsnTNftfiP8Lik',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/The.Wheel.of.Time.S03E08.720p.10Bit.WEB-DL.Hindi.5.1-English.HEVC.x265-HDHub4u.Ms.mkv',
    link: 'tt7462410'
    },
    
    {
    title:'The Pitt [Season 1] [Episode 15] WEB-DL [Hindi + English] [HEVC] | Full Series',
    im:'6fMGktEDXMZZPACJ5cWkVQ6TSte',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/The.Pitt.S01E15.720p.10Bit.WEB-DL.Hindi.2.0-English.HEVC.x265-HDHub4u.Tv.mkv',
    link: 'tt31938062'
    },
    
    {
    title:'Fight or Flight [2025] WEB-DL [Hindi] [HEVC] | Full Movie',
    im:'x4nWnfgJvL045rcUCSJzfgIIY9i',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Fight.or.Flight.2025.720p.10Bit.WEB-DL.Hindi.2.0-English.HEVC.x265-HDHub4u.Ms.mkv',
    link: 'tt13652286'
    },
    
    {
    title:'La Brea [Season 1] [All Episodes] WEB-DL [Hindi + English] [HEVC] | Full Series',
    im:'A3FwGmVtJn4j8TlpnZ1252K3Ztf',
    dl:'https://hubcloud.bz/drive/zlppbphkkpkppas',
    link: 'tt11640018'
    },
    
    
    {
    title:'Peter Pans Neverland Nightmare [2025] WEB-DL [Hindi] [HEVC] | Full Movie',
    im:'mOR1Ks0EcXocwMV4EPv4letz0F5',
    dl:'https://broken-boat-70da.wokates6127718.workers.dev/04a1fd1974d3b15b5ec595463d983b0937018ab14eed0a10ba4c408e71fb35df9bdeb9d32db8e6fb9f3546abe3838cdc::964f9b9a792c072626936df4cf50ee60/1397278773/Peter.Pans.Neverland.Nightmare.2025.720p.10Bit.HEVC.Hindi.2.0.Eng.5.1.AAC.x265.ESub.Vegamovies.is.mkv',
    link: 'tt21955520'
    },
    
    {
    title:'Daredevil: Born Again [Season 1] [All Episodes] WEB-DL [Hindi + English] [HEVC] | Full Series',
    im:'9lLuhV703HGCbnz6FxnqCwIwzAZ',
    dl:'https://hubcloud.bz/drive/ijqtveqixhqgqnw',
    link: 'tt18923754'
    },
    
    {
    title:'Loveyapa [2025] WEB-DL [Hindi] [HEVC] | Full Movie',
    im:'ohHiDAwaOo6R1ovMgmUhrBuvknU',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Loveyapa.2025.720p.HEVC.Hindi.DS4K.WEB-DL.5.1.ESub.x265-HDHub4u.Ms.mkv',
    link: 'tt25504468'
    },
    
    {
    title:'3 Idiots [2009] Blu-Ray [Hindi] | Full Movie',
    im:'66A9MqXOyVFCssoloscw79z8Tew',
    dl:'https://pub-2aac36ca20d3490fa7cd93f6963776f2.r2.dev/3%20Idiots%202009%20BluRay%20720p%20Hindi%20AAC%205.1%20x264%20ESub%20-%20Vegamovies.NL.mkv',
    link: 'tt1187043'
    },
    
    {
    title:'PK [2014] Blu-Ray [Hindi] | Full Movie',
    im:'z2x2Y4tncefsIU7h82gmUM5vnBJ',
    dl:'https://pub-aeb628fbc81d4859bbcbf808ac040ff4.r2.dev/PK%202014%20BluRay%20720p%20Hindi%20AAC%205.1%20x264%20ESub%20-%20Vegamovies.NL.mkv',
    link: 'tt2338151'
    },
    
    {
    title:'FCUK: Father Chitti Umaa Kaarthik [2021] WEB-DL [Hindi + Telugu] [HEVC] | Full Movie',
    im:'bFKvPXGMf8PxB8Bl3mvY0fPfqFx',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/FCUK.2021.720p.HEVC.WEB.DL.Hindi.2.0.Telugu.x265.Vegamovies.is.mkv',
    link: 'tt13912646'
    },
    
    {
    title:'Devara: Part 1 [2024] WEB-DL [Hindi] [HEVC] | Full Movie',
    im:'hdpYUidbB83AfemP369W7guOIlr',
    dl:'https://pub-75da2c60bbef4f4b8d15f14f0ca36898.r2.dev/Devara-Part.1.2024.720p.HEVC.WEB-DL.Hindi.ORG.ESub.x265-Vegamovies.is.mkv',
    link: 'tt11821912'
    },
    
    {
    title:'RRR: Rise Roar Revolt [2022] WEB-DL [Hindi] [HEVC] | Full Movie',
    im:'ljHw5eIMnki3HekwkKwCCHsRSbH',
    dl:'https://pub-41908b5dca44409bba6ef37feffe1d7b.r2.dev/RRR.2022.720p.HEVC.NF.WEB-DL.Hindi.ESub.x265-Vegamovies.NL.mkv',
    link: 'tt8178634'
    },
    
    {
    title:'Game Changer [2025] WEB-DL [Hindi] | Full Movie',
    im:'qtOGsZoLW7QceqKmsOy5nSM6Aik',
    dl:'https://pub-b6877a675d3444388029480942e617c2.r2.dev/Game.Changer.2025.Hindi.ORG.720p.WEB-DL..ESub.Vegamovies.is.mkv',
    link: 'tt14209618'
    },
    
    {
    title:'GOAT: The Greatest of All Time [2024] WEB-DL [Hindi + Tamil] [HEVC] | Full Movie',
    im:'r5FjbUg5Ei9I1q48ENbo6XoFFZy',
    dl:'https://pub-9788ec3a41794eb3a5c8a3ef3e14faf4.r2.dev/The.Greatest.of.All.Time.2024.Hindi.+.Tamil.Dual.Audio.UnCut.Movie.HEVC.720p.ESub.Vegamovies.is.mkv',
    link: 'tt27487934'
    },
    
    {
    title:'No. 1 Businessman [2014] Blu-Ray [Hindi] [UNCUT] | Full Movie',
    im:'hKdshCzKkT2WNEMQCdxUNtK2M4H',
    dl:'https://pixeldrain.net/api/file/r7dAi33d?download',
    link: 'tt2071613'
    },
    
    {
    title:'1: Nenokkadine [2014] HD-RIP [Hindi] | Full Movie',
    im:'3sNBTnCjPQpbgkPvRDfDQe4ybwo',
    dl:'https://pixeldrain.net/api/file/pQzQv5Sz?download',
    link: 'tt2375559'
    },
    
    {
    title:'Maharshi [2019] WEB-DL [Hindi + Telugu] [HEVC] | Full Movie',
    im:'maoChdAwkJLvOy4yyGgYgcCJePi',
    dl:'https://pub-90c967a2e50940b3bd2ce7b78c38a8ee.r2.dev/Maharshi.2019.UNCUT.720p.HEVC.Web-Dl.HIN.TEL.x265.AAC.ESubs.Vegamovies.to.mkv',
    link: 'tt8333978'
    },
    
    {
    title:'Guntur Kaaram [2024] WEB-DL [Hindi + Telugu] [HEVC] | Full Movie',
    im:'4WvxzCSHmjbxqc3wethZoBZ5hmA',
    dl:'https://pub-1879fb6b72894c989342dcdcb43b6f5d.r2.dev/Guntur.Kaaram.2024.Hindi.+.Telugu.Dual.Audio.UnCut.Movie.WEB.DL.720p.x265.HEVC.ESub.Vegamovies.To.mkv.mkv',
    link: 'tt14564000'
    },
    
    {
    title:'The Diplomat [2025] WEB-RIP [Hindi] | Full Movie',
    im:'uwl9Y4px8TTIQK4N19k6gnW1RnX',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/The%20Diplomat%202025%20Hindi%20HDRip%20720p%20x264%20AVC%20HE-AAC%202.0%20HC-ESub-Vegamovies.is.mkv',
    link: 'tt26229612'
    },
    
    {
    title:'Sky Force [2025] WEB-DL [Hindi] | Full Movie',
    im:'pmtev9YTlIRDo25G7lN8dzyoszn',
    dl:'https://pub-b273b76c33d84c9f88667bc60304c96f.r2.dev/Sky.Force.2025.WEB-DL.720p.Hindi.AAC.5.1.x264.ESub.Vegamovies.is.mkv',
    link: 'tt27056066'
    },
    
    {
    title:'Deva [2025] WEB-DL [Hindi] [HEVC] | Full Movie',
    im:'qxtXzAlEPxmjHILU8k8wduvBSdo',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Deva.2025.720p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-Vegamovies.is.mkv',
    link: 'tt27852049'
    },
    
    {
    title:'Fast and Furious - F9: The Fast Saga [2021] Bluray [Directors Cut] [Hindi + English] | Full Movie',
    im:'deEmLILTPejEb6OGsXRJ5MCvyDW',
    dl:'https://pub-acc5b21b83be483d993b7e39c43cec73.r2.dev/F9.The.Fast.Saga.2021.DC.720P.Bluray.Hindi.English.Esub.Vegamovies.to.mkv',
    link: 'tt5433138'
    },
    
    {
    title:'A Working Man [2025] WEB-DL [English] | Full Movie',
    im:'6FRFIogh3zFnVWn7Z6zcYnIbRcX',
    dl:'https://throbbing-mountain-e3b9.piledic2924429.workers.dev/5069c913de9bd7a6c365513c50c3e070adf15927e92b5744702eced6653788efa8557307af8dcc93f1363e37c237a7d4::40b7bc74f2658a3cc87abdbdddb54427/1397278704/A.Working.Man.(2025).English.WEB-DL.720p.Vegamovies.is.mkv',
    link: 'tt9150192'
    },
    
    {
    title:'Loki [Season 2] [All Episodes] WEB-DL [Hindi + English] [HEVC] | Full Series',
    im:'oJdVHUYrjdS2IqiNztVIP4GPB1p',
    dl:'https://vcloud.lol/k3x1s2p1a32dtku',
    link: 'tt9140554'
    },
    
    {
    title:'The Lion King [2019] [Hindi + English] | Full Movie',
    im:'dzBtMocZuJbjLOXvrl4zGYigDzh',
    dl:'https://pub-812c3034b9f0495a9a0fc99beb878367.r2.dev/The.Lion.King.2019.720p.Hindi.English.Vegamovies.NL.mkv',
    link: 'tt6105098'
    },
    
    {
    title:'Jurassic World [2015] [Hindi + English] | Full Movie',
    im:'rhr4y79GpxQF9IsfJItRXVaoGs4',
    dl:'https://pub-f2201cfd3e6c40a0aab698f2469510f4.r2.dev/Jurassic.World.2015.720p.Dual.Audio.Hin.Eng.Vegamovies.NL.mkv',
    link: 'tt0369610'
    },
    
    {
    title:'Inside Out 2 [2024] Blu-Ray [Hindi + English] | Full Movie',
    im:'vpnVM9B6NMmQpWeZvzLvDESb2QY',
    dl:'https://pub-18f397d85d2b418795d42f93537c3335.r2.dev/Inside.Out.2.2024.720p.HS.WEB-DL.English+Hindi.DDP5.1.H.265.Vegamovies.is.mkv',
    link: 'tt22022452'
    },
    
    {
    title:'Star Wars: The Force Awakens [2015] [Hindi + English] | Full Movie',
    im:'wqnLdwVXoBjKibFRR5U3y0aDUhs',
    dl:'https://pub-6a8e352f3b4343fab30e662ffe843820.r2.dev/Star%20Wars%20Episode%20VII%202015%20BluRay%20720p%20Hindi%20English%20AAC%205.1%20x264%20ESub%20-%20[Vegamovies.NL].mkv',
    link: 'tt2488496'
    },
    
    {
    title:'Titanic [1997] [Hindi + English] | Full Movie',
    im:'9xjZS2rlVxm8SFx8kPC3aIGCOYQ',
    dl:'https://pub-546f1a61e0bd416aa572728de0a78a63.r2.dev/Titanic.1997.720p.English.Hindi.Vegamovies.to.mkv',
    link: 'tt0120338'
    },
    
    {
    title:'Avatar 2: The Way of Water [2022] [IMAX] Blu-Ray [Hindi + English] | Full Movie',
    im:'t6HIqrRAclMCA60NsSmeqe9RmNV',
    dl:'https://pub-0a3c165498564f0f826acf53d542d75b.r2.dev/Avatar%20The%20Way%20of%20Water%202022%20BluRay%20720p%20x265%20HEVC%2010bit%20Hindi%20English%20AAC%205.1%20ESub%20-%20Vegamovies.to.mkv',
    link: 'tt1630029'
    },
    
    {
    title:'Avatar [2009] [EXTENDED IMAX] [Hindi + English] | Full Movie',
    im:'kyeqWdyUXW608qlYkRqosgbbJyK',
    dl:'https://pub-71c4b16b588e47ad8b5e22e5b69dbf96.r2.dev/Avatar%202009%20BluRay%20EXTENDED%20720p%20x265%2010bit%20Hindi%20English%20AAC%205.1%20ESub%20-%20Vegamovies.to.mkv',
    link: 'tt0499549'
    },
    
    {
    title:'The Wheel of Time [Season 3] [Episode 7] WEB-DL [Hindi + English] | Amazon Prime Video',
    im:'bJSv3kF8wWmdsXsnTNftfiP8Lik',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/The.Wheel.of.Time.S03E07.720p.10bit.WEB-DL.HIN-ENG.x265.ESub-Vegamovies.is.mkv',
    link: 'tt7462410'
    },
    
    {
    title:'House of David [Season 3] [Episode 8] WEB-DL [Hindi + English] | Amazon Prime Video',
    im:'64ooH4xSiMGAFG11emiGv3pdVkH',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/House.of.David.S01.E08.Web-dl.720p.Hin.Eng.AAC.5.1.x264.MSubs.Vegamovies.is.mkv',
    link: 'tt30955673'
    },
    
    {
    title:'Reacher [Season 3] [All Episodes] WEB-DL [Hindi + English] | Full Series',
    im:'riO4eCaO5MJzknCkaqmLnRmau8L',
    dl:'https://vcloud.lol/xwctts2d31xurdw',
    link: 'tt9288030'
    },
    
    {
    title:'Shangri-La Frontier [Season 2] [Episode 23] WEB-DL [Hindi + English + Japanese]',
    im:'9NRv3gEBGRNXTOmZlNVp6UnKdKG',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Shangri.La.Frontier.S02E23.720p.[HIN.ENG.JAP].Vegamovies.is.mkv',
    link: 'tt28776190'
    },
    
    {
    title:'Lucky Baskhar [2024] WEB-DL [Hindi + Telugu] | Full Movie',
    im:'a47JQFl9L7VDa79tEvnTOJe0rPa',
    dl:'https://pub-cc98aef3a18a46c1a1d41eb308d48df9.r2.dev/Lucky.Baskhar.2024.Hindi.+.Telugu.Dual.Audio.UnCut.South.Movie.720p.10Bit.ESub.x265.Vegamovies.is.mkv',
    link: 'tt27540542'
    },
    
    {
    title:'Happy New Year [2014] WEB-DL [Hindi] | Full Movie',
    im:'2t47Xm1YkYaICKybxbpa55KJvQr',
    dl:'https://pub-310225cc8f904dddbb030f585feeda7e.r2.dev/Happy.New.Year.1080p.Hindi-Vegamovies.NL.mkv',
    link: 'tt2461132'
    },
    
    {
    title:'Hey Sinamika [2022] WEB-DL [Hindi] | Full Movie',
    im:'3t6kgGJqsSMtKitIXXBPgWSqeCf',
    dl:'https://pub-3e694446a4d94c3da563d782d9883d56.r2.dev/Hey%20Sinamika%202022%20720p%20HEVC%20UnCut%20HDRip%20Dual%20x265%20ESub%20-%20Vegamovies.NL.mkv',
    link: 'tt11953194'
    },
    
    {
    title:'Dilwale [2015] WEB-DL [Hindi] | Full Movie',
    im:'pYgPu6hhOr61knwbestTx4vSdMb',
    dl:'https://pub-a23ae5fc51264f6e953bb011d845c65a.r2.dev/Dilwale%202015%20BluRay%20720p%20Hindi%20AAC%205.1%20x264%20ESub%20-%20Vegamovies.NL.mkv',
    link: 'tt4535650'
    },
    
    {
    title:'Mirzapur [Season 3] [All Episodes] WEB-DL [Hindi] [HEVC] | Full Series',
    im:'7CFdq8M9ZuP1QRLaBG2ExdcrCBs',
    dl:'https://vcloud.lol/waug3iovaa1wma1',
    link: 'tt6473300'
    },
    
    {
        "title": "A Silent Voice [2016] WEB-DL [Hindi + English] | Full Movie",
        "im": "6L78T9PrdShYeKR43GlFNfQuVXP",
        "bgi": "eEog93Ca6E0siobDyNcplwc5ooR",
        "dl": "https://pub-d2dc967acaf7453fbec776b6815a163e.r2.dev/A.Silent.Voice.720p.Hindi.Vegamovies.NL.mkv",
        "link": "tt5323662",
        "year": "2016",
        "duration": "129 min",
        "rating": "8.1",
        "genre": "Animation, Drama, Romance",
        "description": "A Silent Voice tells the story of a young boy who bullies a deaf girl in elementary school, only to later seek redemption years later. It's a heart-wrenching tale about forgiveness, guilt, and the power of human connection.",
        "type": "movie",
        "quality": "webdl"
    },
    {
        "title": "Your Name [2016] WEB-DL [Hindi + English] | Full Movie",
        "im": "8GJsy7w7frGquw1cy9jasOGNNI1",
        "bgi": "3apl9DaqJk72GHQ5jZqf0Ee56T7",
        "dl": "https://pub-41866632e0b243d88ba545e419553c39.r2.dev/Your.Name.2016.1.8GB.1080p.Dual.Audio.Hin-Eng.Vegamovies.NL.mkv",
        "link": "tt5311514",
        "year": "2016",
        "duration": "106 min",
        "rating": "8.4",
        "genre": "Animation, Drama, Fantasy",
        "description": "Two teenagers from different parts of Japan find themselves mysteriously swapping bodies. As they navigate each other's lives, they form a deep connection that transcends time and space. A visually stunning and emotionally powerful film.",
        "type": "movie",
        "quality": "webdl"
    },
    
    {
    title:'Dragon Ball Z: Kai [Season 7] [All Episodes] WEB-DL [Hindi + English + Japanese]',
    im:'je57jXdeWeJO9tGoWSJi4MCuXbN',
    dl:'https://vcloud.lol/uib74yjuj3j73c1',
    link: 'tt1409055'
    },
    
    {
    title:'Jujutsu Kaisen [Season 2] [All Episodes] WEB-DL [Hindi + English + Japanese]',
    im:'lUWSkuen0Vu9Xnn1r1SPcucx60e',
    dl:'https://vcloud.lol/hrlhr5dh-qyyimy',
    link: 'tt12343534'
    },
    
    {
    title:'Demon Slayer: Kimetsu no Yaiba - Swordsmith Village [Season 4] [All Episodes] WEB-DL [Hindi + Japanese]',
    im:'6gD7G8HQay1X8mHiFVttWJ3czYb',
    dl:'https://vcloud.lol/p_s1qcjqtt1zmjl',
    link: 'tt9335498'
    },
    
    {
    title:'One Piece: East Blue [Season 1] [Episode 42 - 61] WEB-DL [Hindi + English + Japanese]',
    im:'9hW62RDq5Dno8vLABXscddjEq9M',
    dl:'https://vcloud.lol/dvohztonp0opxoc',
    link: 'tt0388629'
    },
    
    {
    title:'Lucifer [Season 5] [All Episodes] WEB-DL [Hindi + English]',
    im:'uHpfjWUJI2gXQIIxjgAvOZWJORx',
    dl:'https://vcloud.lol/ullultqaqu2wo7o',
    link: 'tt4052886'
    },
    
    {
    title:'Money Heist [Season 5] [Vol 2] WEB-DL [Hindi + English] | All Episodes',
    im:'yfYu1UoxsYlRgnkPTIJBt9SjYAL',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?pd=Q41GLaFP&sn=5 - Vol 2&es=Money.Heist.S05.E&e=6&lp=5&el=.720p.WEB-DL.Hindi.5.1-English.ESub.x264-Vegamovies.NL.mkv',
    link: 'tt6468322'
    },
    
    {
    title:'Naruto: Shippuden (Season 9) WEB-DL [Hindi(ORG DD2.0) + English] | [All Episodes]',
    im:'zIoec9Wa0WtRhwSl9pTrBl9mUOb',
    dl:'https://vcloud.lol/rltugqozqlza1h1',
    link: 'tt0988824'
    },
    
    {
    title:'Naruto (Season 9) WEB-DL [Hindi(ORG DD2.0) + English] | [All Episodes]',
    im:'xppeysfvDKVx775MFuH8Z9BlpMk',
    dl:'https://vcloud.lol/43v3qd3mz4r2puz',
    link: 'tt0409591'
    },
    
    {
    title:'Captain America: Brave New World (2025) WEB-DL [Hindi (DD5.1) & English] [HEVC] | Full Movie [Amazon Prime Video]',
    im:'9TFKZfzzsajmmbu0xWY988Kc7D8',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Captain.America.Brave.New.World.2025.720p.HEVC.WEB-DL.Hindi.2.0-English.HEVC.x265-HDHub4u.Ms.mkv',
    link: 'tt14513804'
    },
    
    {
    title:'Panchayat (Season 3) WEB-DL [Hindi DD5.1] [HEVC] | [All Episodes] | [Amazon Prime Video]',
    im:'vDF2HPy5vuDA4wjnnvh5UdMIzMg',
    dl:'https://hubcloud.bz/drive/cpbo0qqkpbgnuqg',
    link: 'tt12004706'
    },
    
    {
    title:'Stranger Things (S04-VOL 1 & 2) WEB-DL [Hindi DD5.1 & English] | [ALL Episodes] | NetFlix Series',
    im:'5xiUqrCFgT6wU2KzynZMu5CXkM6',
    dl:'https://hubcloud.bz/drive/sv6s9gnbssawnrn',
    link: 'tt4574334'
    },
    
    {
    title:'Better Call Saul (Season 6) BluRay [Hindi (ORG 2.0) & English 5.1] [x264/10Bit-HEVC] | [ALL Episodes] | TVSeries',
    im:'rbNc44otT6VRd7QpxqlUAMyByaQ',
    dl:'https://vcloud.lol/2m14fjjkjgss5gr',
    link: 'tt3032476'
    },
    
    {
    title:'Attack on Titan (Season 4) WEB-DL [Hindi (ORG 2.0) & English] [x264/ESubs] | ALL Episodes',
    im:'sfbSjGlLHsvFQrMUSNR9RrwZgV1',
    dl:'https://vcloud.lol/bbd7u7qsb3bxdip',
    link: 'tt2560140'
    },
    
    {
    title:'Breaking Bad [Season 5] BluRay [Hindi + English] [HEVC] | ALL Episodes',
    im:'r3z70vunihrAkjILQKWHX0G2xzO',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?pd=Rg3X1eWL&sn=5&es=Breaking.Bad.S05E&e=16&el=.720p.BluRay.HIN-ENG.x264.ESub-Vegamovies.To.mkv',
    link: 'tt0903747'
    },
    
    {
    title:'Dil Bechara [2020] WEB-DL [Hindi] [HEVC] | Full Movie',
    im:'lMFjMrc8Bn0CQhtJDORfspXrWrK',
    dl:'https://pixeldrain.net/api/file/1TQKFAVC?download',
    link: 'tt8110330'
    },
    
    {
    title:'The Glass Dome (Season 1) WEB-DL [Hindi (DD 5.1) & English] | NetFlix Series',
    im:'yn4PIMnXJ42lObinYtmIvQ9lVtm',
    dl:'https://hubcloud.bz/drive/jr6pts3f6bnrvt8',
    link: 'tt30750108'
    },
    
    {
    title:'House Of The Dragon [Season 2] [All Episodes] WEB-DL [Hindi + English] [HEVC] | Full Series',
    im:'xhjADf5sslq7lbRjc50FgvIYIkT',
    dl:'https://hubcloud.bz/drive/20xgmqxb0j1290n',
    link: 'tt11198330'
    },
    
    {
    title:'Game of Thrones [Season 8] [All Episodes] BluRay [Hindi + English] [HEVC] | All Episodes',
    im:'259Q5FuaD3TNB7DGauTaJVRC8XV',
    "bgi": "aGehSaCUVfWFSu953kuo6BsyZVw",
    dl:'https://hubcloud.bz/drive/hf_7dvp1xqf_f17',
    link: 'tt0944947'
    },
    
    {
    title:'The Last Stop in Yuma County (2023) BluRay [Hindi (DD2.0) & English] [HEVC] | Full Movie',
    im:'u6ae2MMh8PpSamO3cIttLM5B18v',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/The.Last.Stop.in.Yuma.County.2023.720p.10Bit.BluRay.Hindi.2.0-English.HEVC.x265-HDHub4u.Ms.mkv',
    link: 'tt20247888'
    },
    
    {
    title:'Sarkar (2018) [Hindi – HQ/Studio Dub] WEB-DL [HEVC] HD | Full Movie [Without-ADs]',
    im:'6uF4MtjUuee9CrlzMr4u9bzEz7P',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Sarkar.2018.720p.HEVC.WEB-DL.Hindi.HQ-Dub.x265-HDHub4u.Tv.mkv',
    link: 'tt7715202'
    },
    
    {
    title:'The Divorce Insurance [Episode 5] (Season 1) WEB-DL [Hindi (DD 2.0) & English] | [Amazon Prime Video]',
    im:'6HAbRWYkX3bouEeHA4bjsUxznKC',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/The.Divorce.Insurance.S01E05.720p.WEB-DL.Hindi.2.0-English.2.0.ESub.x264-HDHub4u.Ms.mkv',
    link: 'tt35839843'
    },
    
    {
    title:'Suits LA [Episode 8] (Season 1) WEB-DL [Hindi (ORG 2.0) & English] | NBC Series',
    im:'3hYiNPkcLoI3QWDokOHQJIfn55O',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Suits.L.A.S01E08.720p.WEB-DL.Hindi.2.0-English.5.1.ESub.x264-HDHub4u.Ms.mkv',
    link: 'tt31122751'
    },
    
    {
    title:'Pushpa 2: The Rule RELOADED (2024) WEB-DL [Hindi (ORG 5.1) & Telugu] [HEVC] | Full Movie [NETFLiX]',
    im:'gpNcQfQ4YGtFwEcrjcK9HxVM2KF',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Pushpa.2.The.Rule.Reloaded.2024.720p.HEVC.WEB-DL.Hindi-Telugu.ESub.x265-HDHub4u.Tv.mkv',
    link: 'tt16539454'
    },
    
    {
    title:'Black Mirror (Season 7) WEB-DL [Hindi (DD 5.1) & English] [HEVC] | Netflix Series [All Episodes]',
    im:'hQwMLMahQ5OAgVZFbPRO5SaPqhb',
    dl:'https://vcloud.lol/akvl8vciojkfjff',
    link: 'tt2085059'
    },
    
    {
    title:'Deadpool & Wolverine (2024) BluRay [Hindi (ORG 5.1) & English] [HEVC] | Full Movie',
    im:'xl6sgxa4entJS0aOWX0bPAlEn8',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Deadpool.&.Wolverine.2024.720p.HEVC.BluRay.Hindi.5.1-English.ESub.x265-HDHub4u.Tv.mkv',
    link: 'tt6263850'
    },
    
    {
    title:'Mahadev Ka Gorakhpur (2024) WEB-DL Hindi (DD2.0) [HEVC] | Full Movie',
    im:'60gqcDlQjCnjdWQAyJTBRXDsrvh',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Mahadev.Ka.Gorakhpur.2024.720p.HEVC.Hindi.WEB-DL.2.0.ESub.x265-HDHub4u.Ms.mkv',
    link: 'tt23864668'
    },
    
    {
    title:'Ram Setu (2022) WEB-DL [Hindi DD5.1] [HEVC] ESubs | Full Movie',
    im:'qLkSBwLwuHTqdWHg43u2Pn7pEMQ',
    dl:'https://pixeldrain.net/api/file/Rj7Z3QyL?download',
    link: 'tt11783766'
    },
    
    {
    title:'Thukra Ke Mera Pyaar [Episode 11-19] (Season 1) WEB-DL [Hindi DD5.1] | [HotStar Series]',
    im:'yRn4tml6YNz7cmzD16IMqZ75vYG',
    dl:'https://new2.filesdl.site/cloud/GokQRtE4JV',
    link: 'tt34498121'
    },
    
    {
    title:'Thukra Ke Mera Pyaar [Episode 1-10] (Season 1) WEB-DL [Hindi DD5.1] | [HotStar Series]',
    im:'yRn4tml6YNz7cmzD16IMqZ75vYG',
    dl:'https://new2.filesdl.site/cloud/hAJ5VRUsIP',
    link: 'tt34498121'
    },
    
    {
    title:'The Last of Us (Season 2) WEB-DL [Hindi (DD2.0) & English] [HEVC] | HBO Series | Episode 1',
    im:'dmo6TYuuJgaYinXBPjrgG9mB5od',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/The.Last.of.Us.S02E01.720p.10Bit.WEB-DL.Hindi.2.0-English.HEVC.x265-HDHub4u.Ms.mkv',
    link: 'tt3581920'
    },
    
    {
    title:'I (2015) UNCUT [Hindi-Tamil] | Full Movie ',
    im:'p3VfrFVUmR9A8NFeXPxg9pFYdpv',
    dl:'https://fastdlserver.lol/?id=VlphNFB0QlM1Qytwb1dvV3QxSmVBR1BMeFZLcVlxNVhlZ1NRbVhRSDFmVURDdElsMzBiN1dPU3NPQ3prdzc3Sg==&type=file',
    link: 'tt2302966'
    },
    
    {
    title:'Crazxy (2025) WEB-DL [Hindi DD5.1] [HEVC] | Full Movie [Aamzon Prime Video]',
    im:'nWxEtbryAPP7gI0TtNYejoAUJlr',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Crazxy.2025.720p.HEVC.Hindi.WEB-DL.5.1.ESub.x265-HDHub4u.Ms.mkv',
    link: 'tt30798612'
    },
    
    {
    title:'Rule of the Game: Human Hunting (2021) WEB-DL [Hindi (DD 2.0) & English] [HEVC] | Full Movie',
    im:'7UVfaDT27IZWby255AeKk0vOcyL',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Rule.of.the.Game.Human.Hunting.2021.720p.10Bit.WEB-DL.Hindi.2.0-English.HEVC.x265-HDHub4u.Ms.mkv',
    link: 'tt32150254'
    },
    
    {
    title:'The Waking of a Nation (Season 1) WEB-DL [Hindi DD5.1] [ESubs] | ALL Episodes [SonyLiv Series]',
    im:'nJYPeMgrywL5jdQc9f3QD3Fujo8',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d10=rlXoTzk8C4',
    link: 'tt15910280'
    },
    
    {
    title:'Tron: Legacy (2010) BluRay [Hindi (DD5.1) & English] [HEVC] | Full Movie',
    im:'8PWiwMBccJ67Ng7STjJSgr92qSJ',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/TRON.Legacy.2010.720p.HEVC.BluRay.Hindi.2.0-English.HEVC.x265-HDHub4u.Ms.mkv',
    link: 'tt1104001'
    
    },
    
    {
    title:'Bhoothakaalam (2022) [Hindi - HQ/Studio Dub] WEB-DL [HEVC] | Full Movie [Without-ADs]',
    im:'8yF6A2dwzgHaR3XnO6jdhTsJ9Jp',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Bhoothakaalam.2022.720p.HEVC.WEB-DL.Hindi-HQ.Studio.Dub.x265-HDHub4u.Ms.mkv',
    link: 'tt15560626'
    
    },
    
    {
    title:'Robinhood (2025) PRE-HD Dual Audio [Hindi (LQ Dub) - Telugu 2.0] | Full Movie',
    im:'zeH5oAM1A3zgXbvQ3L9GiDs3ldQ',
    dl:'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Robinhood.2025.PRE-HD.Hindi.LQ.Dub.+.Telugu.720p.x264.AVC.2.0.Vegamovies.is.mkv',
    link: 'tt27171077'
    },
    
    
    {
    title: 'Test (2025) WEB-DL [Hindi (DD5.1) & Tamil] [HEVC] | Full Movie',
    im:'8jZaBr3dTIW8N4D6F4Cprssfm7V',
    dl: 'https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/TEST.2025.720p.HEVC.WEB-DL.Hindi.2.0-Tamil.2.0.ESub.x265-HDHub4u.Ms.mkv', 
    link: 'tt27477888'
    },
    
    {
    title: 'Squid Game [Season 1-2] WEB-DL [Hindi (ORG 5.1) & English] [HEVC] | [ALL Episodes] | NetFlix Series',
    im:'caq0z9C2vvKdDhGe1EX6nerswV5',
    dl: 'https://sdfefed.blogspot.com/2025/04/sddfsdfs.html',
    link: 'tt10919420'
    },
    {
        "title": "Pintu Ki Pappi (2025) WEB-DL [Hindi DD2.0] | Full Movie",
        "im": "aruhGpOwJ5ncEqpZwwqUbP0jWwJ",
        "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Pintu.Ki.Pappi.2025.1080p.HEVC.WEB-DL.Hindi.2.0.HC-ESub.x264-HDHub4u.Ms.mkv",
        "link": "tt35162972",
        "year": "2025",
        "duration": "105 min",
        "rating": "6.5",
        "genre": "Comedy, Drama",
        "description": "A young man struggles to win the heart of the girl of his dreams, but his journey is full of hilarious twists and turns.",
        "type": "movie",
        "quality": "webdl",
        "cast": "Shubham Gaur, Ananya Chauhan, Sudhir Kumar"
    },
    {
        "title": "Superboys of Malegaon (2025) WEB-DL [Hindi DD5.1] [HEVC] | Full Movie",
        "im": "kH8vwnusn83pfHX8tgIIEPbaPd5",
        "dl": "https://pub-c457a64d90034e34aba3bb1cb1734650.r2.dev/Superboys.of.Malegaon.2025.720p.HEVC.Hindi.WEB.DL.HC.Sub.x265.HDHub4US.com.mkv",
        "link": "tt28007064",
        "year": "2025",
        "duration": "120 min",
        "rating": "7.0",
        "genre": "Action, Comedy, Drama",
        "description": "A quirky group of individuals in Malegaon must come together to save their town from an impending disaster. Expect lots of laughs and action.",
        "type": "movie",
        "quality": "webdl",
        "cast": "Ravi Kishan, Pankaj Tripathi, Shubhi Joshi"
    },
    {
        "title": "G20 (2025) WEB-DL [Hindi (DD5.1) & English] | Full Movie",
        "im": "tSee9gbGLfqwvjoWoCQgRZ4Sfky",
        "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/G20.2025.WEB-DL.720p.x264.HiN.ENG.DD+5.1.192Kbps.ESub.Vegamovies.is.mkv",
        "link": "tt23476986",
        "year": "2025",
        "duration": "110 min",
        "rating": "7.2",
        "genre": "Action, Thriller",
        "description": "A global action thriller revolving around the high-stakes events of the G20 summit. Secrets, lies, and espionage threaten to break out in a whirlwind of international drama.",
        "type": "movie",
        "quality": "webdl",
        "cast": "John Boyega, Priyanka Chopra, Daniel Craig"
    },
    {
        "title": "Karma (Season 1) WEB-DL [Hindi (DD5.1) & English] NetFlix Series | ALL Episodes",
        "im": "2G99FfWYCAdsmAIZO8zGFjcDidY",
        "dl": "https://qwrqwrqwr.rf.gd/a/a.php?d10=6U9HaVwhcK",
        "link": "tt29921070",
        "year": "2025",
        "duration": "45 min per episode",
        "rating": "8.0",
        "genre": "Drama, Mystery",
        "description": "A mysterious series that revolves around the lives of a few interconnected characters whose pasts begin to collide in unexpected ways, bringing to light hidden secrets and buried emotions.",
        "type": "series",
        "quality": "webdl",
        "cast": "Nawazuddin Siddiqui, Radhika Apte, Pankaj Tripathi"
    },
    {
        "title": "The Gardener (Season 1) WEB-DL [Hindi (DD 5.1) & English] | NetFlix Series",
        "im": "l2Fy8vvr27vbYJOPe49EfVd5Qli",
        "dl": "https://qwrqwrqwr.rf.gd/a/a.php?d10=Xx4hmDIJqs",
        "link": "tt30494784",
        "year": "2025",
        "duration": "50 min per episode",
        "rating": "7.5",
        "genre": "Drama, Thriller",
        "description": "In a beautiful garden lies a dark secret. This series explores the mysterious events surrounding a seemingly peaceful gardener with a shadowy past.",
        "type": "series",
        "quality": "webdl",
        "cast": "Vikrant Massey, Shraddha Kapoor, Rajkummar Rao"
    },
    {
        "title": "The Legend of Hanuman (Season 6) WEB-DL [Hindi DD5.1] | ALL Episodes [JioHotStar Series]",
        "im": "kqA6PqHflS1JNI8kRVXczSLywYx",
        "dl": "https://qwrqwrqwr.rf.gd/a/a.php?d10=Eoj1z8CcNK",
        "link": "tt13854248",
        "year": "2025",
        "duration": "30 min per episode",
        "rating": "8.2",
        "genre": "Animation, Action, Adventure",
        "description": "The epic story of Lord Hanuman continues in this thrilling sixth season, where he faces greater challenges and battles dark forces that threaten to engulf the world.",
        "type": "series",
        "quality": "webdl",
        "cast": "Sharad Kelkar, Sunil Grover, Ashwin Mushran"
    },
    {
        "title": "Novocaine (2025) WEB-DL [Hindi (DD5.1) & English] [HEVC] | Full Movie",
        "im": "6GbUXZ1gvGrZlZFDjG9SunxFlSl",
        "dl": "https://pub-c457a64d90034e34aba3bb1cb1734650.r2.dev/Novocaine.2025.720p.10bit.WEB.DL.Hindi.5.1.English.5.1.ESub.x265.HDHub4u.Ms.mkv",
        "link": "tt29603959",
        "year": "2025",
        "duration": "105 min",
        "rating": "7.1",
        "genre": "Thriller, Mystery",
        "description": "A dentist's life takes a dark turn when his personal and professional lives collide after a troubled patient enters his office, setting off a chain of disturbing events.",
        "type": "movie",
        "quality": "webdl",
        "cast": "Johnny Depp, Laura Dern, Aaron Eckhart"
    },
    {
        "title": "Avengers: Endgame (2019) [Hindi-English] | Full Movie",
        "im": "ulzhLuWrPK07P1YkdWQLZnQh1JL",
        "dl": "https://pub-745ce71e61f84b518ab187ebacfe4d6a.r2.dev/Avengers.Endgame.2019.720p.BrRip.Hin-Eng.x265.Vegamovies.NL.mkv",
        "link": "tt4154796",
        "year": "2019",
        "duration": "181 min",
        "rating": "8.4",
        "genre": "Action, Adventure, Drama",
        "description": "The Avengers assemble one final time to take on Thanos, in an effort to undo the devastation caused by his snap and restore balance to the universe.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Robert Downey Jr., Chris Evans, Mark Ruffalo, Scarlett Johansson"
    },
    {
        "title": "Avengers: Infinity War (2018) [Hindi-English] | Full Movie",
        "im": "7WsyChQLEftFiDOVTGkv3hFpyyt",
        "dl": "https://pixeldrain.net/api/file/jXMf8Qmf?download",
        "link": "tt4154756",
        "year": "2018",
        "duration": "149 min",
        "rating": "8.4",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans"
    },
    {
        "title": "Spider-Man: No Way Home (2021) BluRay [Hindi (ORG 5.1) & English] [HEVC] | Full Movie",
        "im": "1g0dhYtq4irTY1GPXvft6k4YLjm",
        "dl": "https://pixeldrain.net/api/file/ngYtRmFq?download",
        "link": "tt10872600",
        "year": "2021",
        "duration": "148 min",
        "rating": "8.3",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "With Spider-Man's identity now revealed, Peter seeks help from Doctor Strange to make it so that no one remembers he is Spider-Man, but the spell goes awry, opening the multiverse and bringing dangerous villains from other realities.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Tom Holland, Zendaya, Benedict Cumberbatch, Jacob Batalon"
    },
    {
        "title": "Guardians of the Galaxy (2014) IMAX [Hindi-English] | Full Movie",
        "im": "jPrJPZKJVhvyJ4DmUTrDgmFN0yG",
        "dl": "https://pixeldrain.net/api/file/JCBCdL6f?download",
        "link": "tt2015381",
        "year": "2014",
        "duration": "121 min",
        "rating": "8.0",
        "genre": "Action, Adventure, Comedy",
        "description": "A group of intergalactic criminals must pull together to stop a fanatical warrior who plans to purge the universe.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel"
    },
    {
        "title": "Iron Man (2008) BluRay [Hindi (ORG 5.1) & English] [HEVC] | Full Movie",
        "im": "78lPtwv72eTNqFW9COBYI0dWDJa",
        "dl": "https://pixeldrain.net/api/file/SSYC88zs?download",
        "link": "tt0371746",
        "year": "2008",
        "duration": "126 min",
        "rating": "7.9",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "After being held captive in an Afghan cave, billionaire industrialist Tony Stark creates a unique weaponized suit of armor to fight evil.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Robert Downey Jr., Gwyneth Paltrow, Jeff Bridges, Jon Favreau"
    },
    {
        "title": "Captain America: The Winter Soldier (2014) [Hindi-English] | Full Movie",
        "im": "tVFRpFw3xTedgPGqxW0AOI8Qhh0",
        "dl": "https://pixeldrain.net/api/file/LprmzF1H?download",
        "link": "tt1843866",
        "year": "2014",
        "duration": "136 min",
        "rating": "7.8",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "Steve Rogers struggles to embrace his role in the modern world and battles a new threat from the Soviet agent known as the Winter Soldier.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Chris Evans, Scarlett Johansson, Sebastian Stan, Anthony Mackie"
    },
    {
        "title": "Black Panther (2018) iMAX BluRay [Hindi (ORG 5.1) & English] [HEVC] | Full Movie",
        "im": "uxzzxijgPIY7slzFvMotPv8wjKA",
        "dl": "https://pixeldrain.net/api/file/v24zCqcg?download",
        "link": "tt1825683",
        "year": "2018",
        "duration": "134 min",
        "rating": "7.3",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation. But his leadership is tested when an old foe reappears and threatens the fate of Wakanda.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Chadwick Boseman, Michael B. Jordan, Lupita Nyong'o, Danai Gurira"
    },
    {
        "title": "Thor: Ragnarok (2017) BluRay [Hindi-English] | Full Movie",
        "im": "rzRwTcFvttcN1ZpX2xv4j3tSdJu",
        "dl": "https://pixeldrain.net/api/file/rEgX6zf8?download",
        "link": "tt3501632",
        "year": "2017",
        "duration": "130 min",
        "rating": "7.9",
        "genre": "Action, Adventure, Comedy",
        "description": "Thor is imprisoned on the other side of the universe and finds himself in a race against time to prevent Ragnarok, the destruction of his world.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Idris Elba"
    },
    {
        "title": "Doctor Strange (2016) [Hindi-English] | Full Movie",
        "im": "uGBVj3bEbCoZbDjjl9wTxcygko1",
        "dl": "https://pixeldrain.net/api/file/zr6QWVmq?download",
        "link": "tt1211837",
        "year": "2016",
        "duration": "115 min",
        "rating": "7.5",
        "genre": "Action, Adventure, Fantasy",
        "description": "Dr. Stephen Strange, a brilliant neurosurgeon, discovers the hidden world of magic and alternate dimensions after a car accident ruins his hands.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Mads Mikkelsen"
    },
        {
        "title": "Captain America: Civil War (2016) [Hindi-English] | Full Movie",
        "im": "rAGiXaUfPzY7CDEyNKUofk3Kw2e",
        "dl": "https://pixeldrain.net/api/file/brH7uRP6?download",
        "link": "tt3498820",
        "year": "2016",
        "duration": "147 min",
        "rating": "7.8",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "Captain America and Iron Man find themselves on opposite sides of a conflict when political interference puts them at odds over the registration of super-powered individuals.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Chris Evans, Robert Downey Jr., Scarlett Johansson, Sebastian Stan"
    },
    {
        "title": "K.G.F: Chapter 2 [2022] WEB-DL [Hindi] | Full Movie",
        "im": "4wobXQ8VLfCHvgbevNMy8Rxvo41",
        "dl": "https://pixeldrain.net/api/file/jjhr9BUC?download",
        "link": "tt10698680",
        "year": "2022",
        "duration": "168 min",
        "rating": "8.4",
        "genre": "Action, Drama, Thriller",
        "description": "Rocky is on a mission to overthrow the regime of ruthless gold mafia leader Adheera, but faces a deadly new enemy that will challenge his reign in Kolar Gold Fields.",
        "type": "movie",
        "quality": "webdl",
        "cast": "Yash, Sanjay Dutt, Raveena Tondon, Prakash Raj"
    },
    {
        "title": "K.G.F: Chapter 1 [2018] WEB-DL [Hindi] [HEVC] | Full Movie",
        "im": "ltHlJwvxKv7d0ooCiKSAvfwV9tX",
        "dl": "https://pixeldrain.net/api/file/QMeTp816?download",
        "link": "tt7838252",
        "year": "2018",
        "duration": "155 min",
        "rating": "8.2",
        "genre": "Action, Drama, Thriller",
        "description": "A young man rises through the ranks of the Kolar Gold Fields, facing dangerous adversaries and making ruthless enemies in his fight for power.",
        "type": "movie",
        "quality": "webdl",
        "cast": "Yash, Srinidhi Shetty, Anant Nag, Achyuth Kumar"
    },
    {
        "title": "V (2020) WEB-DL [Hindi (ORG DD5.1) & Telugu DD5.1] [HEVC] HD | Full Movie",
        "im": "iBVcwOVZNGNCNlOLFmcYJW83tTu",
        "dl": "https://pixeldrain.net/api/file/k41xtym6?download",
        "link": "tt11385128",
        "year": "2020",
        "duration": "143 min",
        "rating": "6.9",
        "genre": "Action, Thriller, Crime",
        "description": "An intense cat-and-mouse chase between a cop and a vigilante serial killer who is targeting corrupt individuals.",
        "type": "movie",
        "quality": "webdl",
        "cast": "Nani, Sudheer Babu, Aditi Rao Hydari, Jagapathi Babu"
    },
    {
        "title": "Bahubali 2: The Conclusion (2017) BluRay [Hindi DD5.1] [x264/10Bit-HEVC] | Full Movie",
        "im": "xQ22LOWSkClP3maYhR9nZH0dnWM",
        "dl": "https://pixeldrain.net/api/file/8NYKf3fH?download",
        "link": "tt4849438",
        "year": "2017",
        "duration": "171 min",
        "rating": "8.2",
        "genre": "Action, Adventure, Drama",
        "description": "In the second part of this epic saga, Bahubali seeks revenge and uncovers the truth about his father's death and the kingdom's future.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah Bhatia"
    },
    {
        "title": "Bahubali: The Beginning [2015] BluRay [Hindi] [HEVC] | Full Movie",
        "im": "9BAjt8nSSms62uOVYn1t3C3dVto",
        "dl": "https://pixeldrain.net/api/file/ETa7hVcM?download",
        "link": "tt2631186",
        "year": "2015",
        "duration": "159 min",
        "rating": "8.0",
        "genre": "Action, Adventure, Drama",
        "description": "The first part of the saga chronicles the rise of Bahubali, a legendary warrior who fights to reclaim his rightful throne.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah Bhatia"
    },
    {
        "title": "C.I.D (Season 2) WEB-DL [Hindi DD2.0] [HEVC] | [SonyLiv Series] [Episode-33]",
        "im": "60ZxbAMk6QO8jMD0p8WrGHVCbyK",
        "dl": "https://pub-c457a64d90034e34aba3bb1cb1734650.r2.dev/CID.S02E33.720p.HEVC.Hindi.WEB.DL.2.0.AAC.x265.HDHub4u.Ms.mkv",
        "link": "tt0401916",
        "year": "2020",
        "duration": "50 min",
        "rating": "8.0",
        "genre": "Crime, Drama, Mystery",
        "description": "The C.I.D team solves criminal cases and fights for justice in each gripping episode, highlighting their skills and challenges.",
        "type": "series",
        "quality": "webdl",
        "cast": "Shivaji Satam, Aditya Srivastava, Daya, Ansha Sayed"
    },
    {
        "title": "Emmanuelle [2024] BluRay [Hindi + English] [HEVC] | Full Movie",
        "im": "s9gmKus9YPTDzdMKZQJYPh0VoGk",
        "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Emmanuelle.2024.720p.10Bit.BluRay.Hindi.2.0-English.HEVC.x265-HDHub4u.Ms.mkv",
        "link": "tt20247888",
        "year": "2024",
        "duration": "110 min",
        "rating": "6.5",
        "genre": "Drama, Romance",
        "description": "A passionate romance unfolds as the protagonist embarks on a journey of self-discovery and desire, leading to emotional revelations.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Sylvia Kristel, Alain Cuny, Dorothée Jemma"
    },
    {
        "title": "Court - State Vs. A Nobody (2025) WEB-DL [Hindi (DD5.1) & Telugu] [HEVC] | Full Movie",
        "im": "4pEX67LJd7ZIqYWtksBtOgQEGcQ",
        "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Court.State.vs.A.Nobody.2025.720p.HEVC.WEB-DL.Hindi-Telugu.ESub.x265-HDHub4u.Ms.mkv",
        "link": "tt33307144",
        "year": "2025",
        "duration": "120 min",
        "rating": "7.0",
        "genre": "Drama",
        "description": "A courtroom drama that examines the conflict between the state and an ordinary individual caught in a legal battle, showcasing the complexities of justice in the modern world.",
        "type": "movie",
        "quality": "webdl",
        "cast": "Rajeev Khandelwal, Suman Kumar, Arvind Pandey"
    },
    {
        "title": "Sweetheart! (2025) WEB-DL [Hindi (DD5.1) & Tamil] [HEVC] | Full Movie",
        "im": "sqjWneziflHuKeupBmNJStgTcJQ",
        "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Sweetheart.2025.720p.HEVC.WEB-DL.Hindi.5.1-Tamil.ESub.x265-HDHub4u.Ms.mkv",
        "link": "tt33051459",
        "year": "2025",
        "duration": "105 min",
        "rating": "6.8",
        "genre": "Romance, Drama",
        "description": "Two individuals from different cultural backgrounds fall in love, but their relationship is challenged by societal expectations, family pressures, and their personal dilemmas.",
        "type": "movie",
        "quality": "webdl",
        "cast": "Siddharth, Ananya Panday, Vijay Sethupathi"
    },
    {
        "title": "A Minecraft Movie (2025) HDTC [English (ORG-2.0)] [x264] | Full Movie",
        "im": "tldIoZNsAkEkppQwXGuw3aWVWyL",
        "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/A.Minecraft.Movie.2025.English.720p.HDTC.DD.2.0.x264.Hdhub4u.mkv",
        "link": "tt3566834",
        "year": "2025",
        "duration": "90 min",
        "rating": "7.5",
        "genre": "Adventure, Animation, Fantasy",
        "description": "In this live-action and animated adventure, a young gamer embarks on a perilous journey in the world of Minecraft, where danger, magic, and discovery await.",
        "type": "movie",
        "quality": "hdtc",
        "cast": "Taron Egerton, Emma Watson, Josh Hutcherson"
    },
    {
        "title": "Chhaava (2025) WEB-DL [Hindi DD5.1] | Full Movie [Netflix]",
        "im": "7AeohlqamcLL1diMusV28eTngvg",
        "dl": "https://pub-c457a64d90034e34aba3bb1cb1734650.r2.dev/Chhaava.2025.DS4K.720p.HEVC.Hindi.WEB.DL.ESub.x265.HDHub4u.Ms.mkv",
        "link": "tt27922706",
        "year": "2025",
        "duration": "125 min",
        "rating": "8.0",
        "genre": "Action, Drama, Thriller",
        "description": "In a world full of vengeance and betrayal, a skilled warrior seeks justice for the loss of his loved ones, challenging powerful enemies in his path.",
        "type": "movie",
        "quality": "webdl",
        "cast": "Raghubir Yadav, Manoj Bajpayee, Anil Kapoor"
    },
    
    {
    title: 'Hulk (2003) BluRay [Hindi-English] | Full Movie',
    im: 'qnngKqAcqfH2pBxDoKu5lxzSbTo',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=4a7Y48J1KwDseGk17',
    link: 'tt0286716'
    },
    
    {
    title: 'The Incredible Hulk (2008) BluRay [Hindi-English] | Full Movie',
    im: 'gKzYx79y0AQTL4UAk1cBQJ3nvrm',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=YHqtBPm6aBN6Mvxz6',
    link: 'tt0800080'
    },
    
    {
    title: 'Iron Man 2 (2010) BluRay [Hindi-English] | Full Movie',
    im: '6WBeq4fCfn7AN0o21W9qNcRF2l9',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=WHr5G4pWrXsS6fWq8',
    link: 'tt1228705'
    },
    
    {
    title: 'Thor (2011) BluRay [Hindi-English] | Full Movie',
    im: 'prSfAi1xGrhLQNxVSUFh61xQ4Qy',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=QsmrTwFFmBj7SwGAA',
    link: 'tt0800369'
    },
    
    {
    title: 'Captain America: The First Avenger (2011) BluRay [Hindi-English] | Full Movie',
    im: 'vSNxAJTlD0r02V9sPYpOjqDZXUK',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=a849fbPETpMEH7En7',
    link: 'tt0458339'
    },
    
    {
    title: 'The Avengers (2012) BluRay [Hindi-English] | Full Movie',
    im: 'RYMX2wcKCBAr24UyPD7xwmjaTn',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=fCES7x3p1rRtbQRq7',
    link: 'tt0848228'
    },
    
    {
    title:'Iron Man 3 (2013) BluRay [Hindi-English] | Full Movie',
    im:'1Ilv6ryHUv6rt9zIsbSEJUmmbEi',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=H7p8drnWTaWxus7t9',
    link:'tt1300854'
    },
    
    {
    title:'Thor: The Dark World (2013) BluRay [Hindi-English] | Full Movie',
    im:'wD6g4EcmR6R3VNbuBmNOVq2qWrM',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=m8j5Qb61sxnnyZYw8',
    link:'tt1981115'
    },
    
    {
    title:'Captain America: The Winter Soldier (2014) BluRay [Hindi-English] | Full Movie',
    im:'tVFRpFw3xTedgPGqxW0AOI8Qhh0',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=Hawha6Ucwr8Hys4u8',
    link:'tt1843866'
    },
    
    {
    title:'Avengers: Age of Ultron (2015) BluRay [Hindi-English] | Full Movie',
    im:'4ssDuvEDkSArWEdyBl2X5EHvYKU',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=RrQk6NB1HKcjUHtN7',
    link:'tt2395427'
    },
    
    {
    title:'Ant-Man (2015) BluRay [Hindi-English] | Full Movie',
    im:'rQRnQfUl3kfp78nCWq8Ks04vnq1',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=fPP51JomH1U62oc98',
    link:'tt0478970'
    },
    
    {
    title:'Guardians of the Galaxy Vol. 2 (2017) BluRay [Hindi-English] | Full Movie',
    im:'/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=YwogYX5CULZS4nJ69',
    link:'tt3896198'
    },
    
{
    "title": "Spider-Man: Homecoming [2017] BluRay [Hindi + English] | Full Movie",
    "im": "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=FMppXWWVStDpQkux9",
    "link": "tt2250912",
    "year": "2017",
    "duration": "133 min",
    "rating": "7.4",
    "genre": "Action, Adventure, Sci-Fi",
    "description": "Peter Parker balances his life as a high school student and as Spider-Man while facing the dangerous villain Vulture. His journey to becoming a true hero is tested as he confronts his greatest challenge yet.",
    "type": "movie",
    "quality": "bluRay",
    "cast": "Tom Holland, Michael Keaton, Robert Downey Jr."
},
    
    {
    title:'Ant-Man and the Wasp (2018) BluRay [Hindi-English] | Full Movie',
    im:'/eivQmS3wqzqnQWILHLc4FsEfcXP.jpg',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=ccQ912v5Yn55yhAT8',
    link:'tt5095030'
    },
    
    {
    title:'Captain Marvel (2019) BluRay [Hindi-English] | Full Movie',
    im:'/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=e8BER3nMziuAjD2Y9',
    link:'tt4154664'
    },
    
{
    "title": "Spider-Man: Far from Home (2019) BluRay [Hindi-English] | Full Movie",
    "im": "/rjbNpRMoVvqHmhmksbokcyCr7wn.jpg",
    "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=mcuFcB4cfmMg3JsL7",
    "link": "tt6320628",
    "year": "2019",
    "duration": "129 min",
    "rating": "7.5",
    "genre": "Action, Adventure, Sci-Fi",
    "description": "Peter Parker goes on a school trip to Europe, but his vacation takes a turn when a new threat emerges in the form of the villain Mysterio. Peter must step up to save the world and come to terms with his role as Spider-Man.",
    "type": "movie",
    "quality": "bluRay",
    "cast": "Tom Holland, Jake Gyllenhaal, Zendaya"
},
    
    
    {
    title:'Black Widow (2021) BluRay [Hindi-English] | Full Movie',
    im:'kwB7d51AIcyzPOBOHLCEZJkmPhQ',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=xtf9DpVu1keEG8vn9',
    link:'tt3480822'
    },
    
    {
    title:'Shang-Chi and the Legend of the Ten Rings (2021) BluRay [Hindi-English] | Full Movie',
    im:'d08HqqeBQSwN8i8MEvpsZ8Cb438',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=xtf9DpVu1keEG8vn9',
    link:'tt9376612'
    },
    
    {
    title:'Eternals (2021) BluRay [Hindi-English] | Full Movie',
    im:'lFByFSLV5WDJEv3KabbdAF959F2',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=LHBWnUyKdNDx5xBQA',
    link:'tt9032400'
    },
    
    {
    title:'Doctor Strange in the Multiverse of Madness (2022) BluRay [Hindi-English] | Full Movie',
    im:'ddJcSKbcp4rKZTmuyWaMhuwcfMz',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=https://photos.app.goo.gl/4JKtuhfv475uCxWA9',
    link:'tt9419884'
    },
    
    {
    title:'Ant-Man and the Wasp: Quantumania (2023) BluRay [Hindi-English] | Full Movie',
    im:'qnqGbB22YJ7dSs4o6M7exTpNxPz',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=2URs1ggPsdad8uyy9',
    link:'tt10954600'
    },
    
    {
    title:'Guardians of the Galaxy Volume 3 (2023) BluRay [Hindi-English] | Full Movie',
    im:'r2J02Z2OpNTctfOSN1Ydgii51I3',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=YFyjMY7L1guamLgw8',
    link:'tt6791350'
    },
    
    {
    title:'The Marvels (2023) BluRay [Hindi-English] | Full Movie',
    im:'9GBhzXMFjgcZ3FdR9w3bUMMTps5',
    dl:'http://qwrqwrqwr.rf.gd/a/a.php?d4=WxkZBRW2dogSpDou6',
    link:'tt10601950'
    },
    {
        "title": "Spider-Man 1 (2002) BluRay [Hindi-English] | Full Movie",
        "im": "gh4cZbhZxyTbgxQPxD0dOudNPTn",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=ee65y1T9vbTit1rC9",
        "link": "tt0145487",
        "year": "2002",
        "duration": "121 min",
        "rating": "7.3",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "Peter Parker gains superpowers and becomes Spider-Man to battle the villainous Green Goblin. As a hero, he faces challenges that put his loved ones at risk.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Tobey Maguire, Kirsten Dunst, Willem Dafoe"
    },
    {
        "title": "Spider-Man 2 (2004) BluRay [Hindi-English] | Full Movie",
        "im": "aGuvNAaaZuWXYQQ6N2v7DeuP6mB",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=jwM85n6d8p8kcnuu6",
        "link": "tt0316654",
        "year": "2004",
        "duration": "127 min",
        "rating": "7.3",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "Peter Parker struggles to balance his life as Spider-Man and his personal relationships. Meanwhile, a new villain, Doctor Octopus, threatens the city.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Tobey Maguire, Kirsten Dunst, Alfred Molina"
    },
    {
        "title": "Spider-Man 3 (2007) BluRay [Hindi-English] | Full Movie",
        "im": "qFmwhVUoUSXjkKRmca5yGDEXBIj",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=Po5fP2HKyvk66Trm8",
        "link": "tt0413300",
        "year": "2007",
        "duration": "139 min",
        "rating": "6.2",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "Spider-Man faces a new threat from the Sandman and Venom while dealing with the emergence of a dark side in his personality. His personal life is in turmoil.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Tobey Maguire, Kirsten Dunst, James Franco, Topher Grace"
    },
    {
        "title": "The Amazing Spider-Man (2012) BluRay [Hindi-English] | Full Movie",
        "im": "jexoNYnPd6vVrmygwF6QZmWPFdu",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=fmHnCBttUdMVeFZE9",
        "link": "tt0948470",
        "year": "2012",
        "duration": "136 min",
        "rating": "6.9",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "Peter Parker becomes Spider-Man after the discovery of his father's research. He faces the villainous Lizard while uncovering secrets about his own family.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Andrew Garfield, Emma Stone, Rhys Ifans"
    },
    {
        "title": "The Amazing Spider-Man 2 (2014) BluRay [Hindi-English] | Full Movie",
        "im": "dGjoPttcbKR5VWg1jQuNFB247KL",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=mgJ2wVdbCjvJ8MJW8",
        "link": "tt1872181",
        "year": "2014",
        "duration": "142 min",
        "rating": "6.6",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "Peter Parker faces a new threat in the form of Electro while dealing with his relationship with Gwen Stacy and the mysterious past of his parents.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Andrew Garfield, Emma Stone, Jamie Foxx"
    },
    {
        "title": "Venom (2018) BluRay [Hindi-English] | Full Movie",
        "im": "2uNW4WbgBXL25BAbXGLnLqX71Sw",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=C4f6wKbigDfJYGhB8",
        "link": "tt1270797",
        "year": "2018",
        "duration": "112 min",
        "rating": "6.7",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "Journalist Eddie Brock becomes the host of an alien symbiote, gaining extraordinary powers. However, he struggles to control the powerful entity within him.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Tom Hardy, Michelle Williams, Riz Ahmed"
    },
    {
        "title": "Spider-Man: Into the Spider-Verse (2018) BluRay [Hindi-English] | Full Movie",
        "im": "iiZZdoQBEYBv6id8su7ImL0oCbD",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=LAuM8ZXw3mAH2LTz6",
        "link": "tt4633694",
        "year": "2018",
        "duration": "117 min",
        "rating": "8.4",
        "genre": "Animation, Action, Adventure",
        "description": "Teenager Miles Morales discovers his powers and teams up with other Spider-People from different dimensions to stop a threat that could destroy all realities.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Shameik Moore, Jake Johnson, Hailee Steinfeld"
    },
    {
        "title": "Venom: Let There Be Carnage (2021) BluRay [Hindi-English] | Full Movie",
        "im": "pzKsRuKLFmYrW5Q0q8E8G78Tcgo",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=mrop2M3vAdzSygk46",
        "link": "tt7097896",
        "year": "2021",
        "duration": "97 min",
        "rating": "6.3",
        "genre": "Action, Sci-Fi, Horror",
        "description": "Eddie Brock faces the terrifying Carnage after the escape of Cletus Kasady, a serial killer who merges with an alien symbiote to become a new deadly villain.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Tom Hardy, Woody Harrelson, Michelle Williams"
    },
    {
        "title": "Spider-Man: Across the Spider-Verse (2023) BluRay [Hindi-English] | Full Movie",
        "im": "8Vt6mWEReuy4Of61Lnj5Xj704m8",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=M77or2T2DzRUSUof6",
        "link": "tt9362722",
        "year": "2023",
        "duration": "140 min",
        "rating": "8.5",
        "genre": "Animation, Action, Adventure",
        "description": "Miles Morales continues his journey as Spider-Man, joining forces with other Spider-People from different dimensions to stop a new threat that could destroy the multiverse.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Shameik Moore, Hailee Steinfeld, Jake Johnson"
    },
    {
        "title": "Venom: The Last Dance (2024) WEB-DL [Hindi (ORG 5.1) & English] [HEVC] | Full Movie",
        "im": "vGXptEdgZIhPg3cGlc7e8sNPC2e",
        "dl": "https://pub-db4aad121b26409eb63bf48ceb693403.r2.dev/Venom.The.Last.Dance.2024.720p.10Bit.WEB-DL.Hindi.5.1-English.HEVC.x265-HDHub4u.Tv.mkv",
        "link": "tt16366836",
        "year": "2024",
        "duration": "105 min",
        "rating": "6.8",
        "genre": "Action, Adventure, Sci-Fi",
        "description": "Venom faces a new dangerous adversary who pushes him to the limits. Eddie Brock and the symbiote must fight to save the world from a destructive force unlike anything they’ve ever encountered.",
        "type": "movie",
        "quality": "webdl",
        "cast": "Tom Hardy, Michelle Williams, Woody Harrelson"
    },
    
    {
    title: 'X-Men 1 - (2000) BluRay [Hindi-English] | Full Movie',
    im: 'bRDAc4GogyS9ci3ow7UnInOcriN',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=4UqkNmWzDS3rq1LJ9',
    link: 'tt0120903'
    },
    
    {
    title: 'X-Men 2 X2 - (2003) BluRay [Hindi-English] | Full Movie',
    im: 'rtrd4qieMAhoUshu83Vi1GazM1O',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=E8WSrbGeAg5d5XBf6',
    link: 'tt0199738'
    },
    
    {
    title: 'X-Men 3: The Last Stand (2006) BluRay [Hindi-English] | Full Movie',
    im: 'a2xicU8DpKtRizOHjQLC1JyCSRS',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=WRrrA53roQyEvKDe9',
    link: 'tt0376994'
    },
    
    {
    title: 'X-Men 4 Origins: Wolverine (2009) BluRay [Hindi-English] | Full Movie',
    im: 'yj8LbTju1p7CUJg7US2unSBk33s',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=ZAaBVwwLsF1JE19L6',
    link: 'tt0458525'
    },
    
    {
    title: 'X-Men 5: First Class (2011) BluRay [Hindi-English] | Full Movie',
    im: 'hNEokmUke0dazoBhttFN0o3L7Xv',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=mcfV8Q7BwdnQKeFF8',
    link: 'tt1270798'
    },
    
    {
    title: 'The Wolverine (2013) BluRay [Hindi-English] | Full Movie',
    im: '8lzmovtARDXnE7kTDOum02i6fXv',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=XgqLbrYW2kQHJgfz7',
    link: 'tt1430132'
    },
    
    {
    title: 'X-Men: Days of Future Past (2014) BluRay [Hindi-English] | Full Movie',
    im: 'tYfijzolzgoMOtegh1Y7j2Enorg',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=233ms2aAosaJpWZ69',
    link: 'tt1877832'
    },
    
{
    "title": "Deadpool (2016) BluRay [Hindi-English] | Full Movie",
    "im": "3E53WEZJqP6aM84D8CckXx4pIHw",
    "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=9vXjZPbeHhj2mPjTA",
    "link": "tt1431045",
    "year": "2016",
    "duration": "108 min",
    "rating": "8.0",
    "genre": "Action, Comedy, Sci-Fi",
    "description": "Wade Wilson, a former special forces operative, turns into the mercenary Deadpool after being subjected to an experimental treatment that gives him accelerated healing powers. He seeks revenge against the man who nearly destroyed his life.",
    "type": "movie",
    "quality": "bluRay",
    "cast": "Ryan Reynolds, Morena Baccarin, T.J. Miller"
},
    
    {
    title: 'X-Men: Apocalypse (2016) BluRay [Hindi-English] | Full Movie',
    im: 'ikA8UhYdTGpqbatFa93nIf6noSr',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=z12yKTGsdq7DHgkK6',
    link: 'tt3438826'
    },
    
    {
    title: 'Logan (2017) BluRay [Hindi-English] | Full Movie',
    im: 'fnbjcRDYn6YviCcePDnGdyAkYsB',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=iuD8GEtRVZBz2rGc8',
    link: 'tt3315342'
    },
    
{
    "title": "Deadpool 2 (2018) BluRay [Hindi-English] | Full Movie",
    "im": "to0spRl1CMDvyUbOnbb4fTk3VAd",
    "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=crni6yr2SEaxZ65a9",
    "link": "tt5463162",
    "year": "2018",
    "duration": "119 min",
    "rating": "7.7",
    "genre": "Action, Adventure, Comedy",
    "description": "Deadpool forms the X-Force team to protect a young mutant from the powerful Cable. Together, they must take on a new set of dangerous foes and navigate complex challenges in this action-packed sequel.",
    "type": "movie",
    "quality": "bluRay",
    "cast": "Ryan Reynolds, Josh Brolin, Morena Baccarin"
},

    
    {
    title: 'X-Men: Dark Phoenix (2019) BluRay [Hindi-English] | Full Movie',
    im: 'kZv92eTc0Gg3mKxqjjDAM73z9cy',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=84Q9jx7ZaWeW4nfH8',
    link: 'tt6565702'
    },
    
    {
        "title": "Men in Black 1 (1997) BluRay [Hindi-English] | Full Movie",
        "im": "uLOmOF5IzWoyrgIF5MfUnh5pa1X",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=CJLyq2U3aTztajhs8",
        "link": "tt0119654",
        "year": "1997",
        "duration": "98 min",
        "rating": "7.3",
        "genre": "Action, Adventure, Comedy",
        "description": "A secret organization known as the Men in Black (MIB) controls extraterrestrial activity on Earth. Agent J recruits a new partner, Agent K, to protect the world from an alien threat.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Will Smith, Tommy Lee Jones, Linda Fiorentino"
    },
    {
        "title": "Men in Black 2 - II (2002) BluRay [Hindi-English] | Full Movie",
        "im": "enA22EPyzc2WQ1VVyY7zxresQQr",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=seYdkyG21UX7ZnAMA",
        "link": "tt0120912",
        "year": "2002",
        "duration": "88 min",
        "rating": "6.2",
        "genre": "Action, Adventure, Comedy",
        "description": "Agent J must recruit his old partner, Agent K, who has had his memory erased, to stop a new alien threat and save the world once again.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Will Smith, Tommy Lee Jones, Lara Flynn Boyle"
    },
    {
        "title": "Men in Black 3 (2012) BluRay [Hindi-English] | Full Movie",
        "im": "90DdoEStzeObs96fsYf4GG544iN",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=9JCq3pFz9jZeVqm88",
        "link": "tt1409024",
        "year": "2012",
        "duration": "106 min",
        "rating": "6.8",
        "genre": "Action, Adventure, Comedy",
        "description": "Agent J travels back in time to 1969 to save his partner, Agent K, from being killed by an alien criminal. Along the way, he must team up with a younger version of Agent K.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Will Smith, Tommy Lee Jones, Josh Brolin"
    },
    {
        "title": "Men in Black 4: International (2019) BluRay [Hindi-English] | Full Movie",
        "im": "dPrUPFcgLfNbmDL8V69vcrTyEfb",
        "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=R3QpHiySnMakcLJMA",
        "link": "tt2283336",
        "year": "2019",
        "duration": "114 min",
        "rating": "6.7",
        "genre": "Action, Adventure, Comedy",
        "description": "The Men in Black have expanded to a global level. New recruit Agent M joins Agent H in London to uncover an alien conspiracy that could threaten the planet.",
        "type": "movie",
        "quality": "bluRay",
        "cast": "Chris Hemsworth, Tessa Thompson, Liam Neeson"
    },
    
{
    "title": "Pushpa The Rise Part 1 (2021) WEB-DL [Hindi] | Full Movie",
    "im": "r1yAzVQNbCbPTbB3GZFour9Qr0t",
    "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=uVFzgQFR1hXEQr9F8",
    "link": "tt9389998",
    "year": "2021",
    "duration": "179 min",
    "rating": "7.6",
    "genre": "Action, Drama, Thriller",
    "description": "Pushpa, a laborer working in the red sandalwood smuggling business, rises through the ranks to become a powerful figure. The film follows his journey and the conflict with the police and rival smugglers.",
    "type": "movie",
    "quality": "webdl",
    "cast": "Allu Arjun, Fahadh Faasil, Rashmika Mandanna"
},

    
    {
    title: 'Surya The Soldier - Naa Peru Surya, Naa Illu India (2018) WEB-DL [Hindi] | Full Movie',
    im: 'fHQAy0hHANT8BIRrLAQCfmLwIN4',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=BXiYSQ1PV4h31rTM7',
    link: 'tt7794524'
    },
    
{
    "title": "DJ - Duvvada Jagannadham (2017) WEB-DL [Hindi] | Full Movie",
    "im": "71aRdJ1BVKXiwaERnD2UWL3J5AR",
    "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=RaUHJ4PHMX4qB6BY7",
    "link": "tt6734984",
    "year": "2017",
    "duration": "146 min",
    "rating": "7.2",
    "genre": "Action, Comedy, Drama",
    "description": "Duvvada Jagannadham, a simple Brahmin boy, leads a double life as DJ, a stylish and fearless vigilante. He fights against the corrupt elements of society, even while managing his family and cultural obligations.",
    "type": "movie",
    "quality": "webdl",
    "cast": "Allu Arjun, Pooja Hegde, Rao Ramesh"
},

    
    {
    title: 'Sarrainodu (2016) WEB-DL [Hindi] | Full Movie',
    im: 'olXLUc36dmYFdZrU7UkC3DeADfv',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=YDhNo1xK8CzDTUmw6',
    link: 'tt5457772'
    },
    
    {
    title: 'Son of Satyamurthy (2015) WEB-DL [Hindi] | Full Movie',
    im: 'oQq3FMD952F8Rnu619O2boTK1Do',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=iv7TL87bUcYUUMPa7',
    link: 'tt4596814'
    },
    
    {
    title: 'Rudhramadevi (2015) WEB-DL [Hindi] | Full Movie',
    im: 'i3gFyjzp5qTiFCwxCr1n59Ak6dA',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=kFe2capTmEudsD1dA',
    link: 'tt2807410'
    },
    
{
    "title": "Main Hoon Lucky The Racer - Race Gurram (2014) WEB-DL [Hindi] | Full Movie",
    "im": "4ojbzpHL0wmlnrmlLQGLds6Hwvu",
    "dl": "http://qwrqwrqwr.rf.gd/a/a.php?d4=FCNee1xo7fXF54ww5",
    "link": "tt3142764",
    "year": "2014",
    "duration": "152 min",
    "rating": "7.1",
    "genre": "Action, Comedy, Drama",
    "description": "Lucky, a man with an adventurous spirit, and his brother are caught in a race with powerful enemies. He must use his wit and courage to overcome challenges and protect his loved ones in this action-packed journey.",
    "type": "movie",
    "quality": "webdl",
    "cast": "Allu Arjun, Shruti Haasan, Ravi Kishan"
},
    
    {
    title: 'Dangerous Khiladi 2 - Iddarammayilatho (2013) WEB-DL [Hindi] | Full Movie',
    im: 'bsh8YdNxq66oH0MvJFd7hjlq6Fq',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=Nk9po3sh32VG2to37',
    link: 'tt2714622'
    },
    
    {
    title: 'Dangerous Khiladi - Julayi (2012) WEB-DL [Hindi] | Full Movie',
    im: 'tIUBifudyRCKhF1utslaDoDRteW',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=yZytzQrjHKTG4eKcA',
    link: 'tt2330927'
    },
    
    {
    title: 'Antim Faisla - Vedam (2010) WEB-DL [Hindi] | Full Movie',
    im: 'fwozjObCQSZsGdUw0dJXJSdEocj',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=TRmGoh6X9yE5knMc9',
    link: 'tt1649431'
    },
    
    {
    title: 'Ek Aur Rakshak - Varudu (2010) WEB-DL [Hindi] | Full Movie',
    im: 'b9vJOQal3MfSVdoIoo9hcpsF23P',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=vSzh1wizyjoKV3ao8',
    link: 'tt1582637'
    },
    
    {
    title: 'Arya 2 Ek Deewana (2009) WEB-DL [Hindi] | Full Movie',
    im: 'kjbbx8kV6pNhNXX9aRsVDwyEJbm',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=nKpcEeoZ3waVPUvb7',
    link: 'tt1526323'
    },
    
    {
    title: 'Veertaa The Power - Parugu (2008) WEB-DL [Hindi] | Full Movie',
    im: '3RYvVIZyNfYI6DRdljL42hA8zMr',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=LwTFKRjEYbvtrQoB8',
    link: 'tt1198349'
    },
    
    {
    title: 'Dum - Happy (2006) WEB-DL [Hindi] | Full Movie',
    im: 'nPITY2XjohAubgnY9Ihq4k5DfjH',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=rtv65pSY3G872ocG7',
    link: 'tt0491775'
    },
    
    {
    title: 'Arya Ki Prem Pratigya (2004) WEB-DL [Hindi] | Full Movie',
    im: '1RU7eOgierTfTiNNQUmd1h5iKFU',
    dl: 'http://qwrqwrqwr.rf.gd/a/a.php?d4=tRfnAJnSAqDUJhj76',
    link: 'tt0431619'
    }
    ];