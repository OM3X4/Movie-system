/* eslint-disable */
import { writeFileSync } from 'fs';

// Your large message

// Write to a file
import {data} from "./editedData.js";

function similarity(){

  let dataCopy = [...data];
  
    const film =   {
        title: "Inception",
        year: 2010,
        cast: [
          "Leonardo DiCaprio",
          "Joseph Gordon-Levitt",
          "Ellen Page",
          "Tom Hardy",
        ],
        genres: ["Science Fiction", "Thriller"],
        href: "Inception",
        extract:
        "Inception is a sci-fi thriller directed by Christopher Nolan, involving dream infiltration and extraction, led by skilled thief Dom Cobb.",
        rating: 8.369,
        wideImg: "https://image.tmdb.org/t/p/w1280/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
        duration: "2h 28m",
        release: "July 15, 2010",
        genre: "Action",
        trailer: "https://www.youtube.com/embed/cdx31ak4KbQ",
        reviews: [
          {
            author: "ohlalipop",
            content:
              "When I first saw the trailer for this film, I knew that this would attract a lot of attention. Of course having Leonardo in the lead role helped a lot. \r\n\r\n\r\nFrom the trailer, I already know some things. Dreams. All about dreams. But what about dreams? Who are the other people? At first, I didn't really understand what was going on. It was all very confusing to me. But as the movie progresses, I start to understand it and I wanted to watch some more and know more what will happen in the end. The ending. That was, I think, the most intense ending of a movie in a year or probably more than a year. People actually screamed when the screen faded. And of course, people couldn't help but talk about it. It was an open-ended movie where people will have their own endings. My favorite part was Joseph Gordon's fight scene. I think he has the most fun part in this movie.\r\n\r\n\r\nMy rate for this movie is A.",
            created_at: "February 9, 2017",
            url: "https://www.themoviedb.org/review/589c420fc3a3684cde007279",
          },
          {
            author: "tmdb44006625",
            content:
              "Whether you watch Inception as a heist movie, a redemption story, or a sci-fi action picture, Christopher Nolan's tour de force of dreams will absolutely work its magic over you. The fact that the film works on so many levels (literally) is an attest not only to the visual queues that make it easy for the audience to follow but to how much in control of all the intricacies its filmmaker had to be.",
            created_at: "March 9, 2019",
            url: "https://www.themoviedb.org/review/5c842825925141277a1f5db9",
          },
          {
            author: "Varya",
            content:
              "Is there anyone on earth who doesn't like Christopher Nolan’s films? Inception is one of his masterpieces. It’s a science fiction film released in 2010 and written by undoubtedly one of the greatest directors in Hollywood, Christopher Nolan, the creator of such stunning films as ‘Memento’, ‘The dark knight’, Prestige’ and ‘Interstellar’. the cast is impressive: the main roles are played by Leo DiCaprio, Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Ellen Page, Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.\r\n\r\nThe film is based on the idea of lucid dreams. In the story, the professionals of industrial espionage, using special techniques to steal valuable secrets from the depths of the subconscious during sleep, when the human mind is most vulnerable, learn a new technique - the ‘inception’ of ideas into the human mind through his dream. The main character - Dom Cobb is a talented thief, his rare abilities made him a truly valuable player in the treacherous world of espionage, but they also turned him into a perennial fugitive and stripped him of everything he had ever loved. One day Cobb has a chance to correct mistakes. His latest case can bring everything back, but for that he needs to do the impossible - inception.\r\n\r\nThere are so many good things about the film. The plot of the film is definitely mind-blowing. You won't be able to take your eyes off the screen. The soundtrack is written by Hans Zimmer, who is certainly one of the most sought-after composers. I think all his music is incredibly touching, dramatic and powerful. There are also some iconic songs we all know. The work on the special effects is done flawlessly, evidently, a lot of money was spent on this. The acting is also wonderful, Leo DiCaprio, who was the first actor to accept the offer to play in the film, has done an amazing job.\r\n\r\nThe only thing that viewers can find bad about this film is that it can be extremely difficult to perceive. If you don’t watch the film close enough you can simply get lost in all these jumping from dreams to reality.\r\n\r\nA curious fact is that Christopher Nolan released the film in 2010 but started working on it at the beginning of the 2000s! I would recommend everyone to see the film, even if you are not interested in sci-fi.",
            created_at: "October 17, 2019",
            url: "https://www.themoviedb.org/review/5da8071d944a570019251c8a",
          },
          {
            author: "Matthew Brady",
            content:
              "Ariadne: \"Why is it so important to dream?\"\r\n\r\nCobb: \"Because, in my dreams we are together.\"\r\n\r\nI haven't seen this movie in years, but after re-watching it struck me hard how depressing this was.\r\n\r\nPutting aside the action sequences and loud music and a complicate plot, there's a beautiful story about a man trying to get back to his children, without it being cheesy. Well if you really break this movie at it's core, it's about two grieving men (Leo and Murphy), both haunted by the past until they have the strength to accept reality and let them go.\r\n\r\nThe 'Grow Old Together' scene stuck with me the most.\r\n\r\nYou can say whatever you want about Christopher Nolan, but his movies are never hollow. I'm also convince that Nolan would be the perfect choice to direct a James Bond movie.\r\n\r\nSeriously, throughout the whole movie I was thinking \"Man imagine the genius behind Inception directing a Bond movie\". The ingredients are right there.",
            created_at: "January 27, 2020",
            url: "https://www.themoviedb.org/review/5e2f2902326c1900121c04ca",
          },
          {
            author: "Adam Rife",
            content:
              'This is actually a Perfect movie. It is the 2nd perfect movie I\'ve seen and it is flawless in almost every way. Since perfection itself is an imaginary value like Infinity or <a href="https://paperhelp.nyc/">paperhelp</a> that when you add +1 to it, or make it better in any way, that adds to the imaginary state of infinity itself making it factually an imaginary number. There are only a few issues, such as a little too fast pacing, even though the film itself is about 2:17:00 long, and also I would have preferred them not show the helper on the train until After it was revealed to be a 2nd dream state. Also some bland emotional displays overall. Other than these small issues it is as perfect as a movie can be made. Totally Amazing film when you are in the mood for an action movie. WATCH TWICE, or more, as it would be nearly impossible to truly experience this film without seeing it 2 times in short breaks between viewings.',
            created_at: "September 17, 2020",
            url: "https://www.themoviedb.org/review/5f639841069f0e0036ad1f9b",
          },
        ],
      };
    
    const scores = new Map();
    for (const movie of dataCopy) {
      let score = 0;
    
      // Genre matching (scaled by importance)
      for (const genre of movie.genres) {
        if (film.genres.includes(genre)) {
          score += 2;  // genre similarity is important
        }
      }
    
      // Cast matching (scaled by importance)
      for (const actor of movie.cast) {
        if (film.cast.includes(actor)) {
          score += 0.5; // cast similarity is less important
        }
      }
    
      // Year similarity
      if (movie.year === film.year) {
        score += 0.2;
      }
      
      // Rating similarity (scaled)
      const ratingDifference = Math.abs(movie.rating - film.rating);
      if (ratingDifference <= 1) {
        score += 1;
      } else if (ratingDifference <= 2) {
        score += 0.5;
      }
    
      // Duration similarity (if available)
      const filmDurationMinutes = convertDurationToMinutes(film.duration);
      const movieDurationMinutes = convertDurationToMinutes(movie.duration);
      const durationDifference = Math.abs(filmDurationMinutes - movieDurationMinutes);
      if (durationDifference <= 15) {
        score += 0.5; // small duration difference gives a slight score boost
      }
    
      scores.set(movie.title, score);
    }
    
    // Sorting the movies based on the score
    dataCopy = dataCopy.sort((a, b) => {
      const scoreA = scores.get(a.title) || 0;
      const scoreB = scores.get(b.title) || 0;
      if (scoreB === scoreA) {
        return a.year - b.year; // If scores are equal, prefer newer films
      }
      return scoreB - scoreA;
    });
    
    // console.log(dataCopy[2].title, scores.get(dataCopy[2].title));
    
    function convertDurationToMinutes(duration) {
        // Check if duration is a valid string
        if (typeof duration !== 'string' || !duration) {
          return 0;  // Return 0 if the duration is invalid or undefined
        }
        
        const parts = duration.split(' ');
        let hours = 0;
        let minutes = 0;
        
        // Check and process hours
        if (parts.length > 0 && parts[0].includes('h')) {
            hours = parseInt(parts[0].replace('h', '').trim());
          }
    
          // Check and process minutes
          if (parts.length > 1 && parts[1].includes('m')) {
            minutes = parseInt(parts[1].replace('m', '').trim());
        }
    
        return (hours * 60) + minutes;
    }

    return dataCopy;
}

const search = "robert downey"

const movie =   {
  title: "Avengers: Endgame",
  year: 2019,
  cast: [
    "Robert Downey Jr.",
    "Chris Evans",
    "Mark Ruffalo",
    "Chris Hemsworth",
    "Scarlett Johansson",
  ],
  genres: ["Superhero", "Action"],
  href: "Avengers:_Endgame",
  extract:
  "Avengers: Endgame concludes the Marvel Cinematic Universe's Infinity Saga, following the Avengers' efforts to undo the devastation caused by Thanos.",
  thumbnail:
  "https://w0.peakpx.com/wallpaper/632/50/HD-wallpaper-poster-of-avengers-endgame-movie-thumbnail.jpg",
  rating: 8.2,
  wideImg: "https://image.tmdb.org/t/p/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
  duration: "3h 1m",
  release: "April 24, 2019",
  genre: "Adventure",
  trailer: "https://www.youtube.com/embed/AMSITikqKiM",
  reviews: [
    {
      author: "garethmb",
      content:
      "The epic Marvel Saga that started over ten years ago has been building up to the inevitable clash with the powerful tyrant Thanos (Josh Brolin).  Last year’s “Avengers: Infinity War” set the stage for the highly-anticipated conclusion; “Avengers: End Game” and at long last it has arrived.\r\n\r\nPicking up shortly after the events of the last film, the Avengers must deal with the aftermath of what Thanos has done. The team is naturally divided between wanting revenge, wanting to set things right, and just wanting to take what they have and go on. \r\n\r\nAs time passes and they struggle to accept the reality of their situation; an unexpected individual returns and with them comes the seeds of a new plan to make things right. Naturally Tony Stark (Robert Downey Jr.) is skeptical but eventually warms to the possibilities of the idea thanks to a new scientific breakthrough that makes it possible.\r\n\r\nInspired, Tony sets out to put an elaborate plan in motion that will allow the team to try to fix things and to stop Thanos once and for all.\r\n\r\nWhat follows is an extended and at times nostalgic heist where various members of the team work to assemble the pieces needed for the plan as they believe they only have one chance to make things right.\r\n\r\nThe film is essentially three acts in one. The first deals with the recap and expansion of their situation and the planning. The second act is basically a heist where action and comedy are blended with some touching moments.\r\n\r\nThis all leads to the final act which is the FX laden set piece where the ensemble cast gathers to fight the forces of evil in a battle to save the Universe.\r\nThe film is epic in scale and length as it clocks in at over three hours but the movie is filled with so much content that the time goes by quickly and you have a hard time believing three hours have elapsed.\r\n\r\nIt is also a difficult film to review as you cannot recap elements of the film in any great detail without giving away elements that are sure to delight the fans. Suffice it to say that my only real issue with the fil and it was minor; was that it took a while to get to the action but at least there was plenty to keep you entertained along the way.\r\n\r\nAs this phase of the Marvel Film Universe winds down and plans are put in place for the next five years; “Avengers: End Game” is a satisfying conclusion to the epic saga that was started many years ago and weaves elements of many of the past Marvel films into an entertaining tale which features all of the best elements that have made the series of films such big hits.\r\n\r\n4.5 stars out of 5",
      created_at: "April 24, 2019",
      url: "https://www.themoviedb.org/review/5cbf94670e0a266b96fba5ef",
    },
    {
      author: "Gimly",
      content:
      "Hey, so, just some really quick thoughts I wanna get down, 'cause it's after 1 o'clock in the morning, and I wanna get some sleep so I can wake up well rested to see _Endgame_ again.\r\n\r\nPutting it out there right from the get-go, _Avengers: Endgame_ is my favourite MCU movie. It's my favourite movie of the year too, but I've only seen like ten or so 2019 releases, and this is the 22nd Marvel Cinematic Universe film, so that seems far and away the bigger deal. I can't say it's perfect, there's some conflicting stuff within its own runtime that really doesn't seem to gel (though a re-watch may prove me wrong on that), and it's not like every moment was the no-holds-barred-zero-exception best version of that moment from start to end. But God I loved this thing.\r\n\r\nI will say this though, the reason that I loved it, is this thing is fan service galore. If you do not care for the franchise's 21 movies preceding this point, then _Endgame_ is not the movie to turn you around on that. That may come in a future installment, but this one is a culmination. It's the end of _Infinity War_ but also Phase 3, but also a wrap-up and genuine ode to/send off for everything that Marvel has done over the past 11 years. That to me was incredible, and I am eternally greatful, but I cannot imagine it working for people who have no vested interest in these characters.\r\n\r\nTo me though? My first 9 out of 10 rating in **three years**.\r\n\r\n_Final rating:★★★★½ - Ridiculously strong appeal. I can’t stop thinking about it._",
      created_at: "April 24, 2019",
      url: "https://www.themoviedb.org/review/5cc07fa00e0a2615fdf464d3",
    },
    {
      author: "Manuel São Bento",
      content:
        "If you enjoy reading my Spoiler-Free reviews, please follow my blog :)\r\n\r\nDon't worry. This is going to be a pretty vague review. Right now, as I'm writing this sentence, I'm still processing what I saw and how am I going to explain how I felt without spoiling a single tiny thing. First of all, it's such a mix of feelings. On one hand, I'm extremely happy that I was lucky to be alive during this epic time and that I was able to follow these characters that I love and care about so much. On the other hand, I'm obviously sad that it finally reached the end of this (hopefully) first incredible saga. There are no perfect films and one with so many heroes will always have struggles balancing it all (Infinity War already had this issue). \r\n\r\nHowever, the Russo brothers did everything they could to deliver a phenomenal story, and they did. I don't think this could have been any better. Its last hour exceeds any expectations. It's epic, emotional, action-heavy, and it has one of my favorite shots in the entire history of cinema. It's pure magic, and the VFX team will surely get an Oscar for it. The action reminded me of the biggest Lord of the Rings' battles, and it was impeccably filmed, filled with riveting and chill-inducing sequences. Nevertheless, don't expect this high-intensity feeling throughout the whole runtime. The other two acts are a slow-burn build-up to a payoff that's going to make you pretty much either \"love\" or \"like\" this movie. I absolutely love it! \r\n\r\nThis is easily one of the best MCU films, if not my new number one. I can't deny that the 3-hour runtime has some unnecessary scenes, but even if they don't have a significant impact on the plot or even in the characters, they still contribute to the enormous build-up. Seeing this family that we grew up with just talking with each other or having lunch, at the same time that they deal with the consequences of Thanos' snap, is inexplicably captivating and heartwarming. Characters like Natasha (Scarlett Johansson) and Steve (Chris Evans) supporting each other is simply beautiful. Their comradery and chemistry are worthy of some tears here and there.\r\n\r\nSome people didn't really enjoy Infinity War so much due to the lack of screentime that some characters had. This time around, there are fewer characters to work with, so the balance is better. Everyone gets an important role, from Captain America to Ant-Man (Paul Rudd) to Nebula (Karen Gillan), and even Rocket (Bradley Cooper). Every single character has a major moment. If you take one out of the movie, it just doesn't work anymore. This is not only great work from the directors, but also from the writers. \r\n\r\nChristopher Markus and Stephen McFeely are not even going to be remembered because fans will always think of the cast first. Most of them will also remember the directors. But the writers?! If I stand at the door of the theater at the end of the film and question everyone about who are the writers, I strongly believe most of the audience won't know. Every dialogue, every sentence, every word carries so much impact on the narrative. Literally, I cried and got chills just by hearing two freaking words with the perfect timing in between. The amount of grief that the words of the ones who've lost everyone and everything carry is palpable and, for me, those are the most emotional moments of the movie: seeing how everyone is suffering from their own losses, not the deaths themselves.\r\n\r\nThe humor is mostly on-point, but it's still connected to my only real issue with the film, which is the second act's tone. From the moment the team decides what to do, we already know that this is a 1 in 14 million chance of success like Dr. Strange (Benedict Cumberbatch) said, so the stakes and pressure are massive! With this level of tension, I didn't expect such an “easygoing” and “funny” vibe throughout, except for one particular sequence. They do a great job once again of pairing up certain Avengers together, but most of them go through these too comedic plot points for such a crucial and serious mission. Fortunately, this act carries enough action and emotional drive to make this problem not that big of an issue.\r\n\r\nVisually, this is arguably the best-looking superhero film ever. From the mind-blowing visual effects to the gorgeous cinematography, everything is perfect. The costumes are gritty and muddy when our heroes are in a battle, their faces are all filled with blood, and I have no words to describe how jaw-dropping that last act is. I can't wait to change my desktop wallpaper once THAT shot is available. I dropped a single tear just by looking at it. No one talks, no one does anything. It's just an amazingly beautiful image. The score is epic as hell. So much that I'm listening to it right now as I'm writing this review, and I'm getting chills all over my body. \r\n\r\nI can't really write much more, to be honest. I will acknowledge the cast because they are brilliant. Each and every single member delivers an outstanding performance, but if I had to choose the ones that both surprised me and had the most impact on me, they would be Johansson's, Evans', and Robert Downey Jr's (Tony Stark / Iron Man). “New” characters like Captain Marvel (Brie Larson) blend seamlessly, and the payoff is unbelievably satisfying. In terms of predictability, it goes more or less as I expected, but it still carries a few surprises throughout. Nothing is ever like we imagine or theorize about, so expect the unexpected, and don't judge a movie by if it fits your crazy, unrealistic theories that never crossed the producers and directors' minds in the first place!\r\n\r\nAll in all, I don't know what to do now. The only thing I'm sure of is that I want to see it again, as soon as possible. The last hour is f*cking insane. I couldn't fall asleep properly because I couldn't stop thinking about it. Endgame surpasses all expectations. It's everything I wished for and so much more. I could easily spend a whole day at the movie theater and watch three sessions in a row. It's that good. One of the best comic-book films of all-time, without a single doubt. Thank you to Kevin Feige and everyone who worked hard to bring the MCU to where it stands now. I can't even think of how are they going to produce something at the level of Infinity Saga. Maybe they never will. Maybe we'll have to wait another decade or two for something like this. Until then, see you at the next Endgame screening! Enjoy! Oh and #DontSpoilTheEndgame!\r\n\r\nPS: it's not a perfect movie, I know. It doesn't exist one. Yes, Endgame has some issues regarding its pacing and tone, but I would be lying to myself if this isn't everything I dreamed of. I felt the same way with Civil War, regarding the rating to give, and I ended up giving it an A after a first viewing. As soon as I watched the second time, I changed it to an A+. I don’t need to wait for that second viewing with Endgame … And thank you to my audience for being incredibly respectful. No yelling, no crazy laughs, no stupid people doing stupid stuff. Thank you so much for not ruining one of the best cinematic experiences of my life!\r\n\r\nRating: A+",
      created_at: "April 26, 2019",
      url: "https://www.themoviedb.org/review/5cc307bfc3a36809ab86e2fd",
    },
    {
      author: "heroman",
      content:
        "okay so if your like me you questioned this movie due to the fact that i personally thought nothing could beat infinity war well after seeing it i can honestly say we have a new champion this was absolutley excelent so hilarious action packed the 3 hrs passes extremily fast my only thing is the use of god.... bothered me and i suggest if your offended by that wait till dvd so you can mute the parts also a reminder to parents 'no matter how bad you want to see the movie dont do like people in my theater did and bring your 3 year old 'but besides that awesome movie",
      created_at: "April 28, 2019",
      url: "https://www.themoviedb.org/review/5cc5b3b1c3a36849368181c9",
    },
    {
      author: "courtlynn",
      content:
        "We waited till day 5 of release in theaters. There was a slow start to the movie so i don't recommend taking little ones under the age of 10. After all the anticipation and hype,Avengers Endgame did not disappoint. Waa a perfect \"ending' to the series. Very well done",
      created_at: "May 2, 2019",
      url: "https://www.themoviedb.org/review/5ccace3f0e0a262fb3fee8b3",
    },
  ],
}

function omar(){
  if(movie.title.toLowerCase().includes(search.toLowerCase())){
        return true;
    }else if(search.toLowerCase().includes(movie.title.toLowerCase())){
        return true;
    }else if(movie.genres.some(item => item.includes(search.toLowerCase()))){
      return true;
    }else if( movie.extract ? movie.extract.toLowerCase().includes(search) : false){
        return true;
    }else if( search == movie.year){
      return true;
    }else if(movie.cast.some(item => item.toLowerCase().includes(search.toLowerCase()))){
      return true;
    }else return false;
}

let d = [];

for(const movie of data){
  if(!movie.cast){
    continue;
  }
  for(const actor of movie.cast){
    d.push(actor)
  }
}

let x = new Set(d)
const dataString = JSON.stringify(Array.from(x), null, 2);

writeFileSync('output.txt', dataString);
console.log(x)