Template.main.helpers({
    data: {
        languages: "ENGLISH","FRANÇAIS","РУССКИЙ","SUOMI","SVENSKA","ČEŠTINA","SLOVENČINA","DEUTSCH"
        games: {
            date: "today","Thursday 2/12",
            teams: "Detroit,Pittsburgh", " Vancouver, Chicago"
            time: "8:00pm", "10:00pm"
            channel: "NBCSN"
                }
        Banner: {"Draft Kings enter now ad"},
        display:{
            type: "Image link to movie"
            rotating: "true"
            description:"Watch tonight at penguins 8pm"
        }
        headline:{
            title:"Dynamic duo",
            description: "Red Wings Tatar emerging as rising star"
        SideBar: {
            articleList: [
                {title:"Sabres land E. Kane from jets", Video: true}, 
                {title: "Fantasy: Impact of deal", Video: true},
                {title:" D-men ranks", Video: true},
                {title:"Stars acquire goaltender Enroth from Sabres", video: false},
                {title:"Nabokov retires", video:false},
                {title:"Career almost never started", video: false},
                {title:"Devils' Jagr won't ask for trade", video:false},
                {title: "Wings-Penguins", video: true}
            ]
        }
        Mediablock: {
            TopicList: NHL_VideoCenter[
                {title:"Rinne adds to his super save highlight reel" Video: true}, 
                {title:"Puck rolls on its side and takes turn into empty net" Video: true},
                {title:"Dan Boyle converts nifty pass from Derick Brassard" Video: true},
                {title:"Vasilevskey joins the save of the year conversation" video: true},
                {title:"Watch Levi Stadium's time lapse transformation" video:true},
                
        }
        HighlightVideos: [
                {title: "Game Highlights"},
                {title: "Classic CLips"},
                {title: "NHL Live"},
                {title: "Press Room"},
                {title:"Shootout"},
                {title:"Week's Best"},
                {title: "Player Safety"}
                        ]
        SocialMedia: tags [
                {host:"Facebook"},
                {host:"Twitter"},
                {host:"youtube"},
                {host: "instagram"},
                {host:"pinterest"},
                {host: "FourSquare"},
                {host:"Google Plus"},
                {host: "vine"}
                ]
        StarsOfTheWeek:{
                {name: "mats Zuccaello",
                Position: "Right Wing",
                Team: "New York Rangers",
                Goals: "2",
                Assists: "0",
                points:"2",
                video: true
                }
                {name: "Jonathon Huberdeau",
                Position: "Left Wing",
                Team: "Florida Panthers",
                Goals: "0",
                Assists: "3",
                points:"3",
                video: true
                }
                {name: "Michael Hutchinson",
                Position: "Goalie",
                Team: "Winnipeg Jets",
                SavePercentage: ".967",
                Saves: "29",
                ShotsAgainst: "30",
                video: true
                }
            }
        }

    }
});