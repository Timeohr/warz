document.getElementById('search').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll('#musicTable tbody tr');
    
    rows.forEach(row => {
        const artist = row.cells[0].textContent.toLowerCase();
        const song = row.cells[1].textContent.toLowerCase();
        
        if (artist.includes(searchValue) || song.includes(searchValue)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});





document.addEventListener("DOMContentLoaded", function() {
    var checkbox = document.getElementById('persistentCheckbox');
    var customCheckbox = document.getElementById('customCheckbox');

    // Check local storage to see if the checkbox was checked
    if (localStorage.getItem('checkboxChecked') === 'true') {
        checkbox.checked = true;
        customCheckbox.classList.add('checked');
    }

    // Add event listener to the custom checkbox
    customCheckbox.addEventListener('click', function() {
        checkbox.checked = !checkbox.checked;
        customCheckbox.classList.toggle('checked');

        // Save the checked state in local storage
        localStorage.setItem('checkboxChecked', checkbox.checked);
    });
});







document.addEventListener("DOMContentLoaded", function() {
    const songs = [
        {artist: "ABBA", song: "Gimme Gimme!", guitar: false, video: "https://www.youtube.com/watch?v=M5J6IaW2RmY", difficulty:"Easy", },
        {artist:"AC/DC",song:"Hard as a Rock", guitar:false, video:"https://www.youtube.com/watch?v=tIxxhfNC-ig&ab_channel=DonegalGuitarClub",difficulty:"Medium"},
        {artist: "AC/DC", song: "Back in Black", guitar: true, video: "https://www.youtube.com/watch?v=NFgE_xDxCZ4&list=LL&index=179",difficulty:"Medium"},
        {artist: "AC/DC ", song: "Hells bells ", guitar: true, video: "https://www.youtube.com/watch?v=GHN0wn7ofMA",difficulty:"Medium"},
        {artist: "AC/DC", song: "Highway to Hell", guitar: true, video: "https://www.youtube.com/watch?v=-ocEF19Awe8&list=LL&index=108",difficulty:"Easy"},
        {artist: "AC/DC", song: "Thunderstruck", guitar: true, video: "https://www.youtube.com/watch?",difficulty:"Hard"},
        {artist: "AC/DC", song: "TNT", guitar: true, video: "https://www.youtube.com/watch?v=mWMiHIP5J28&list=LL&index=122",difficulty:"Easy"},
        {artist:"AC/DC",song:"Whiskey on the rocks", guitar:false, video:"",difficulty:"Medium"},
        {artist: "AC/DC", song: "Whole Lotta Rosie", guitar: false, video: "https://www.youtube.com/watch?v=n8pG8mkynCE",difficulty:"Medium"},
        {artist: "Adèle", song: "Someone Like You", guitar: false, video: "https://www.youtube.com/watch?v=mjwqrQkMLpQ",difficulty:"Easy"},
        {artist:"Aerosmiths", song:"Dream On",guitar:false,video:"https://www.youtube.com/watch?v=YCSWCojyctM&ab_channel=Mr.Tabs",difficulty:"Hard"},
        {artist: "Alan Walker", song: "Faded", guitar: false, video: "https://www.youtube.com/watch?v=QLZzhzghxZI",difficulty:"Easy"},
        {artist: "Among Us", song: "Chanson thème", guitar: true, video: "https://warz.my.canva.site/dagj5jxzaba",difficulty:"Easy"},
        {artist: "Amy McDonald", song: "This is the Life", guitar: false, video: "https://www.youtube.com/watch?v=22D6GGO-IsY",difficulty:"Medium"},
        {artist: "Angry Birds", song: "Chanson thème", guitar: false, video: "https://www.youtube.com/watch?v=yW1vqmxnc8E&list=LL&index=216",difficulty:"Easy"},
        {artist: "Aqua", song: "Barbie Girl", guitar: false, video: "https://www.youtube.com/watch?v=NWkHTXInQN8",difficulty:"Easy"},
        {artist: "Ariana Grande", song: "One Last Time", guitar: false, video: "https://warz.my.canva.site/partition",difficulty:"Easy"},
        {artist: "Avicii", song: "Wake Me Up", guitar: false, video: "https://www.youtube.com/watch?v=ttQ4zKNH3l0",difficulty:"Medium"},
        {artist: "Artic Monkeys", song: "Do I Wanna Know", guitar: true, video: "https://www.youtube.com/watch?v=3muj9PkZfJM",difficulty:"Medium"},
        {artist: "Axel F", song: "Crazy Frog (Rock)", guitar: false, video: "https://www.youtube.com/watch?v=VXk2FpZmk2k&list=LL&index=33",difficulty:"Hard"},
        {artist: "Baby Bash", song: "Suga Suga", guitar: true, video: "https://www.youtube.com/watch?v=H22UVTtjKkc&list=LL&index=227",difficulty:"Medium"},
        {artist: "Beach House", song: "Space Song", guitar: false, video:"https://www.youtube.com/watch?v=Gya5kPy8evU&ab_channel=JoshuaCruz", difficulty:"Medium"},
        {artist: "Black Eyed Peas", song: "I Gotta Feeling", guitar: false, video: "https://www.youtube.com/watch?v=OMl17rRWXiw",difficulty:"Easy"},
        {artist: "Black Sabbath", song: "Paranoid", guitar: false, video: "https://www.youtube.com/watch?v=B2R3WZXzsNA",difficulty:"Medium"},
        {artist:"Black Sabbath", song:"Iron Man",guitar:false ,video:"https://www.youtube.com/watch?v=SAH_e5paU2Q&ab_channel=Mr.Tabs",difficulty:"Medium"},
        {artist: "Blur", song: "Song 2", guitar: false, video:"https://www.youtube.com/watch?v=jqPSKdaBD_U&ab_channel=EtiennedeLoriol-GuitarLessons", difficulty:"Medium"},
        {artist: "Bobby Helms", song: "Jingle Bell Rock", guitar: false, video: "https://www.youtube.com/watch?v=Fh25K_cYHAU",difficulty:"Medium"},
        {artist: "Bobby McFerrin", song: "Don't Worry Be Happy", guitar: false, video: "https://www.youtube.com/watch?v=iQWyZ07xXUY",difficulty:"Easy"},
        {artist:"Bon Jovi", song:"You Give Love a Bad Name",guitar:false,video:"https://www.youtube.com/watch?v=cB_eDlfyL9Y&ab_channel=Mr.Tabs",difficulty:"Medium"},
        {artist: "Céline Dion", song: "My Heart Will Go On", guitar: false, video:"https://www.youtube.com/watch?v=xLoJyjzY6mc&ab_channel=MikeAtsushi", difficulty:"Hard"},
        {artist: "Brenda Lee", song: "Rockin' Around the Christmas Tree", guitar: false, video: "https://www.youtube.com/watch?v=NPUPq7Q3gGM&list=LL&index=98",difficulty:"Medium"},
        {artist:"C'EST PAS SORCIER",song:"C'est pas Sorcier", guitar:false, video:"https://www.youtube.com/watch?v=TjMJBdtKwms&ab_channel=Saturax",difficulty:"Medium"},
        {artist: "Chris Isaak", song: "Wicked Game", guitar: false, video:"https://www.youtube.com/watch?v=DUlGas6qq-I&ab_channel=GuitarZero2HeroExpress", difficulty:"Medium"},
        {artist: "Christmas", song: "We Wish You a Merry Christmas", guitar: true, video: "https://yjrthn.my.canva.site/dagjvltlex0",difficulty:"Easy"},
        {artist: "Chuck Berry", song: "Johnny B Goode", guitar: true, video: "https://www.youtube.com/watch?v=to_IKcCqCNA",difficulty:"Hard"},
        {artist: "Coldplay", song: "Adventure Of A Lifetime", guitar: true, video: "https://www.youtube.com/watch?v=ZFi-2sTl3Dg",difficulty:"Medium"},
        {artist: "Coldplay", song: "Clocks", guitar: false, video: "https://www.youtube.com/watch?v=D_9TaHc7ZxE",difficulty:"Medium"},
        {artist: "Daft Punk", song: "Get Lucky", guitar: false, video: "https://www.youtube.com/watch?v=UJla-UJnr5w",difficulty:"Medium"},
        {artist: "David Kushner", song: "Daylight", guitar: false, video: "",difficulty:"Easy"},
        {artist: "Deep Purple", song: "Smoke on the Water", guitar: true, video: "https://www.youtube.com/watch?v=7kKoOPf7nWc&list=LL&index=181",difficulty:"Easy"},
        {artist:"Depeche Mode", song:"Personnal Jesus",guitar:false,video:"https://www.youtube.com/watch?v=NsAxVei0shE&ab_channel=DottiBrothers", difficulty:"Medium"},
        {artist: "Dick Dale", song: "Miserlou", guitar: true, video: "https://www.youtube.com/watch?v=7SkL4ZGXNis",difficulty:"Extreme"},
        {artist: "Dire Straits", song: "Money for Nothing", guitar: true, video: "https://www.youtube.com/watch?v=uDZudIAX-V8",difficulty:"Medium"},
        {artist: "Dire Straits", song: "Sultans of Swing", guitar: true, video: "https://www.youtube.com/watch?v=H7N2nvBdZ4g&list=LL&index=126",difficulty:"Hard"},
        {artist: "Dire Straits", song: "Walk of Life", guitar: false, video: "https://www.youtube.com/watch?v=1EcQNEM5tlY",difficulty:"Medium"},
        {artist: "Drake", song: "Hotline Bling", guitar: false, video: "https://www.youtube.com/watch?v=pJlsXZXbnhw",difficulty:"Easy"},
        {artist: "Eagle", song: "Hotel California", guitar: true, video: "https://www.youtube.com/watch?v=afWkEabj4JA",difficulty:"Hard"},
        {artist: "Eminem", song: "Lose Yourself", guitar: true, video: "https://www.youtube.com/watch?v=hyTuJremJDM&list=LL&index=69",difficulty:"Easy"},
        {artist: "Eminem", song: "The Real Slim Shady", guitar: false, video: "https://www.youtube.com/watch?v=5qiL6skP_S0",difficulty:"Easy"},
        {artist:"Enya", song:"Freaks",guitar:false,video:"https://www.youtube.com/watch?v=e9wzN47Skww&ab_channel=Egor5287",difficulty:"Medium"},
        {artist: "Eric Weissberg", song: "Dueling Banjos", guitar: false, video: "https://www.youtube.com/watch?v=NA5J4jG2REo&list=LL&index=103",difficulty:"Extreme"},
        {artist: "Europe", song: "The Final Countdown", guitar: false, video: "https://www.youtube.com/watch?v=-l1bhvxnQg8&list=LL&index=119",difficulty:"Medium"},
        {artist:"Eyesdress", song:"Jealous",guitar:false,video:"https://www.youtube.com/watch?v=mYenDfAt8sM&ab_channel=Egor5287",difficulty:"Easy"},
        {artist: "Foo Fighters", song: "Everlong", guitar: false, video: "https://www.youtube.com/watch?v=pn12DsoVHrg",difficulty:"Medium"},
        {artist:"Fortnite",song:"Rock Out", guitar:false, video:"https://www.youtube.com/watch?v=M3wVbtL5LSI&ab_channel=HenryL4",difficulty:"Hard"},   
        {artist:"Frozy", song:"Kompa - She Said She's From The Islands",guitar:false,video:"https://www.youtube.com/watch?v=-14jwSc8UUI&ab_channel=MikeAtsushi",difficulty:"Easy"},
        {artist: "Gary Moore", song: "Still Got The Blues", guitar: false, video:"https://www.youtube.com/watch?v=qZp6chNS0MI&ab_channel=Mr.Tabs", difficulty:"Hard"},
        {artist: "Green Day", song: "1981", guitar: false, video: "https://www.youtube.com/watch?v=bXgO3kcdfvQ",difficulty:"Easy"},
        {artist: "Green Day", song: "21 Guns", guitar: true, video: "https://www.youtube.com/watch?v=4h6wiKaXnC8",difficulty:"Easy"},
        {artist: "Green Day", song: "American Idiot", guitar: true, video: "https://www.youtube.com/watch?v=8mU5W5RxwyA&list=LL&index=2",difficulty:"Easy"},
        {artist: "Green Day", song: "Basket Case", guitar: true, video: "https://www.youtube.com/watch?v=poSLef1O4VI&list=LL&index=97",difficulty:"Medium"},
        {artist: "Green Day", song: "Boulevard of Broken Dreams", guitar: true, video: "https://www.youtube.com/watch?v=hWdyDWUAM-U",difficulty:"Easy"},
        {artist: "Green Day", song: "Emenius Sleepus", guitar: false, video: "https://www.youtube.com/watch?v=_Mejn2HyOLE",difficulty:"Easy"},
        {artist:"Green Day", song:"Extraordinary Girl",guitar:false,video:"https://www.youtube.com/watch?v=Ex00cI1Rziw&ab_channel=Strachechannel",difficulty:"Easy"},
        {artist:"Green Day", song:"F.O.D",guitar: false,video:"https://www.youtube.com/watch?v=v-CZ7-l-ZkQ&ab_channel=Strachechannel",difficulty:"Easy"},
        {artist: "Green Day", song: "Good Riddance", guitar: true, video: "https://www.youtube.com/watch?v=-PBapVNukdw&list=LL&index=106",difficulty:"Medium"},
        {artist: "Green Day", song: "Holiday", guitar: false, video: "https://www.youtube.com/watch?v=f_kJIo-o_jk",difficulty:"Easy"},
        {artist: "Green Day", song: "Know Your Enemy", guitar: false, video: "https://www.youtube.com/watch?v=Af4zzuQnOfQ",difficulty:"Easy"},
        {artist:"Green Day", song:"Living in the '20s",guitar:false,video:"https://www.youtube.com/watch?v=2WxMlnZctrw&ab_channel=JoanManuelDefelippe",difficulty:"Medium"},
        {artist: "Green Day", song: "Peacemaker", guitar: false, video: "https://www.youtube.com/watch?v=cl5W2gEIL60",difficulty:"Medium"},
        {artist:"Green Day", song:"She",guitar:false ,video:"https://www.youtube.com/watch?v=MRjvLWPL9TE&ab_channel=DottiBrothers",difficulty:"Easy"},
        {artist: "Green Day", song: "The American Dream Is Killing Me", guitar: false, video: "https://www.youtube.com/watch?v=LuE9jjqI_pQ",difficulty:"Medium"},
        {artist: "Green Day", song: "Wake Me Up When September Ends", guitar: false, video: "https://www.youtube.com/watch?v=apJEmYSoSIs",difficulty:"Medium"},
        {artist: "Green Day", song: "Welcome to Paradise", guitar: false, video: "https://www.youtube.com/watch?v=NB7QGmuaf8s",difficulty:"Medium"},
        {artist: "Green Day", song: "When I Come Around", guitar: true, video: "https://www.youtube.com/watch?v=82yLzB0Jv5k&list=LL&index=13",difficulty:"Easy"},
        {artist: "Gummibär", song: "I'm a Gummy Bear", guitar: false, video: "https://www.youtube.com/watch?v=qVFoEn0MMY4&list=LL&index=214",difficulty:"Easy"},
        {artist: "Guns N' Roses", song: "Don't Cry", guitar: false, video: "https://www.youtube.com/watch?v=eaLPAkNgpJE",difficulty:"Medium"},
        {artist: "Guns N' Roses", song: "Knockin' on Heaven's Door", guitar: false, video:"https://www.youtube.com/watch?v=z_mC7TCJzbI&ab_channel=Mr.Tabs", difficulty:"Medium"},
        {artist: "Guns N' Roses", song: "November Rain", guitar: false, video: "https://www.youtube.com/watch?v=fRIQEDrzSHI",difficulty:"Extreme"},
        {artist: "Guns N' Roses", song: "Sweet Child O' Mine", guitar: false, video: "https://www.youtube.com/watch?v=WW_iOXWCGLE",difficulty:"Extreme"},
        {artist: "Huey Lewis & The News", song: "The Power of Love", guitar: false, video: "https://www.youtube.com/watch?v=a0Eo5hyniuc&list=LL&index=108",difficulty:"Medium"},
        {artist: "Indochine", song: "J'ai demandé à la lune", guitar: true, video: "https://www.youtube.com/watch?v=_hzKjaygcfA",difficulty:"Easy"},
        {artist: "Indochine", song: "L'aventurier", guitar: true, video: "https://www.youtube.com/watch?v=OtDvFTUMhHw",difficulty:"Easy"},
        {artist: "Indochine", song: "Un été français", guitar: false, video: "https://www.youtube.com/watch?v=k_3wZSWoNa8",difficulty:"Easy"},
        {artist: "Isaac Albéniz", song: "Asturias (The middle of the Night)", guitar: false, video: "https://www.youtube.com/watch?v=CCVBDCavI_c",difficulty:"Extreme"},
        {artist: "Jean Jacques Goldman", song: "Quand la musique est bonne", guitar: false, video: "https://www.youtube.com/watch?v=FDY74A04G1I",difficulty:"Easy"},
        {artist:"Jennifer Lopez", song:"On the floor",guitar:false,video:"https://www.youtube.com/watch?v=3aSncqvQ_v8&ab_channel=singlestring-onestring",difficulty:"Medium"},
        {artist: "Joan Jett", song: "I Love Rock'n'Roll", guitar: true, video: "https://www.youtube.com/watch?v=D_yLqkfLdN8&list=LL&index=173",difficulty:"Easy"},
        {artist: "John Lennon & The Plastic Ono Band", song: "Imagine", guitar: false, video: "https://www.youtube.com/watch?v=Aae6iN3YtK8",difficulty:"Easy"},
        {artist: "Joyeux Anniversaire", song: "Joyeux Anniversaire", guitar: true, video: "https://www.youtube.com/watch?v=DUP_wOwxAIw&list=LL&index=239",difficulty:"Easy"},
        {artist: "Kaelo", song: "Way Down We Go", guitar: true, video: "https://www.youtube.com/watch?v=umO5bml-Fk8",difficulty:"Medium"},
        {artist: "Kiss", song: "I Was Made For Lovin' You", guitar: true, video: "https://www.youtube.com/watch?v=q8gDR_20q_M&list=LL&index=90",difficulty:"Medium"},
        {artist:"Lady Gaga", song:"Judas",guitar:false,video:"https://www.youtube.com/watch?v=9zB5-NsuQJU&ab_channel=JoshuaCruz",difficulty:"Medium"},
        {artist:"Lady Gaga", song:"Poker Face",guitar:false,video:"https://www.youtube.com/watch?v=EsKbDCF7_m4&ab_channel=JoshuaCruz",difficulty:"Easy"},
        {artist: "Led Zeppelin", song: "Kashmir", guitar: false, video: "https://www.youtube.com/watch?v=O-GtetAEGbg",difficulty:"Hard"},
        {artist: "Led Zeppelin", song: "Stairway to Heaven", guitar: false, video:"https://www.youtube.com/watch?v=hyefrmWZL6s&ab_channel=Mr.Tabs", difficulty:"Hard"},
        {artist: "Lenny Kravitz", song: "Are You Gonna Go My Way", guitar: false, video:"https://www.youtube.com/watch?v=eZ6wjZcW0oA&ab_channel=Mr.Tabs", difficulty:"Hard"},
        {artist: "Les Inconnus", song: "C'est Toi Que Je T'aime", guitar: true, video: "https://www.youtube.com/watch?v=mMDDQfgl6_c",difficulty:"Easy"},
        {artist: "Limp Bizkit", song: "Behind Blue Eyes", guitar: true, video: "https://www.youtube.com/watch?v=T4RMeof-mNk&list=LL&index=120",difficulty:"Medium"},
        {artist:"Linkin Park",song:"In The End", guitar:false, video:"https://www.youtube.com/watch?v=0dytH1lzeWg&ab_channel=DottiBrothers",difficulty:"Medium"},
        {artist: "Linkin Park", song: "Numb", guitar: false, video: "https://www.youtube.com/watch?v=2y3NzrX7Ftk",difficulty:"Medium"},
        {artist: "Los Lobos & Gipsy Kings", song: "La Bamba", guitar: true, video: "https://www.youtube.com/watch?v=iY7OVbwL2fc",difficulty:"Medium"},
        {artist: "Lynyrd Skynyrd", song: "Free Bird", guitar: false, video: "https://www.youtube.com/watch?v=raZBLp4zowg&list=LL&index=32",difficulty:"Extreme"},
        {artist: "Lynyrd Skynyrd", song: "Sweet Home Alabama", guitar: false, video:"https://www.youtube.com/watch?v=jO-1W79oS5M&ab_channel=Mr.Tabs", difficulty:"Medium"},
        {artist: "Maneskin", song: "Beggin'", guitar: false, video: "https://www.youtube.com/watch?v=8yigppmsBxA",difficulty:"Medium"},
        {artist:"Maneskin", song:"I Wanna Be Your Slave",guitar:false,video:"https://www.youtube.com/watch?v=K9notPNqIUY&ab_channel=loicflb",difficulty:"Medium"},
        {artist:"Maneskin",song:"Valentine", guitar:false, video:"https://www.youtube.com/watch?v=w-amTMnbUqI&ab_channel=BehnamDabestanizade",difficulty:"Medium"},
        {artist: "Marilyn Manson", song: "Sweet Dreams", guitar: true, video: "https://www.youtube.com/watch?v=LnoIsvTrsnM",difficulty:"Medium"},
        {artist:"Men At Work", song:"Who Can It Be Now ? ",guitar: false, video:"https://www.youtube.com/watch?v=WbtRlgyC5UI&ab_channel=CWZGuitar",difficulty:"Easy"},
        {artist: "Metallica", song: "Enter Sandman", guitar: true, video: "https://www.youtube.com/watch?v=NIAkEJp8i_Y",difficulty:"Medium"},
        {artist: "Metallica", song: "Fade To Black", guitar: true, video: "https://www.youtube.com/watch?v=gv7tQV4BJgA&list=LL&index=127",difficulty:"Hard"},
        {artist: "Metallica", song: "For Whom the Bell Tolls", guitar: false, video: "https://www.youtube.com/watch?v=cniVsbWBqwY",difficulty:"Medium"},
        {artist: "Metallica", song: "Fuel", guitar: false, video: "https://www.youtube.com/watch?v=O0hafFjUgE0&list=LL&index=12",difficulty:"Hard"},
        {artist:"Metallica", song:"Lux AEterna",guitar:false,video:"https://www.youtube.com/watch?v=q5juZoqEbH8&ab_channel=Mr.Tabs",difficulty:"Hard"},
        {artist: "Metallica", song: "Master of Puppets", guitar: true, video: "https://www.youtube.com/watch?v=S6jkEOIHJFg&list=LL&index=123",difficulty:"Extreme"},
        {artist: "Metallica", song: "Nothing Else Matters (Easy - Normal)", guitar: true, video: "https://www.youtube.com/watch?v=pwEm2QNWYQo&list=LL&index=146",difficulty:"Medium"},
        {artist: "Metallica", song: "One", guitar: true, video: "https://www.youtube.com/watch?v=2DwZzHimUlU",difficulty:"Extreme"},
        {artist: "Metallica", song: "Ride The Lightning", guitar: false, video: "https://www.youtube.com/watch?v=MFJU_PjT0Pw",difficulty:"Extreme"},
        {artist: "Metallica", song: "Seek & Destroy", guitar: true, video: "https://www.youtube.com/watch?v=z44pg4ETY3k",difficulty:"Medium"},
        {artist: "Metallica", song: "The Unforgiven", guitar: true, video: "https://www.youtube.com/watch?v=0ESwHgrqPYg&list=LL&index=137",difficulty:"Medium"},
        {artist:"Metallica", song:"Wherever I may roam",guitar:false,video:"https://www.youtube.com/watch?v=L_eaLgBG5CQ&ab_channel=JulienMENARD",difficulty:"Hard"},
        {artist: "Michael Jackson", song: "Beat It", guitar: true, video: "https://www.youtube.com/watch?v=_MEq8JzK0qM&list=LL&index=170",difficulty:"Medium"},
        {artist:"Michael Jackson", song:"They Don't Care About Us",guitar:false,video:"https://www.youtube.com/watch?v=98e-VdYmhWg&ab_channel=MrKalidasu",difficulty:"Medium"},
        {artist: "Muse", song: "Hysteria", guitar: true, video: "https://www.youtube.com/watch?v=FWWppuONlsU&list=LL&index=133",difficulty:"Hard"},
        {artist: "Muse", song: "New Born", guitar: true, video: "https://www.youtube.com/watch?v=WIxZNlK5QX0&list=LL&index=132",difficulty:"Extreme"},
        {artist: "Muse", song: "Unintended", guitar: false, video: "https://www.youtube.com/watch?v=bvVu1lEtLN8&list=LL&index=224",difficulty:"Easy"},
        {artist: "Muse", song: "Uprising", guitar: false, video: "https://www.youtube.com/watch?v=7I7p2DzDUtk",difficulty:"Medium"},
        {artist: "Narciso Yepes", song: "Jeux interdits", guitar: true, video: "https://www.youtube.com/watch?v=DGfPSbPp_eA&list=LL&index=104",difficulty:"Medium"},
        {artist: "Nicki Minaj", song: "Starships", guitar: false, video:"https://www.youtube.com/shorts/bFo3Qd8lxhI", difficulty:"Medium"},
        {artist: "Nirvana", song: "About A Girl", guitar: true, video: "https://www.youtube.com/watch?v=R44ENb5G5j4&list=LL&index=116",difficulty:"Easy"},
        {artist: "Nirvana", song: "About A Girl (Unplugged - Acoustic 1988)", guitar: true, video: "https://www.youtube.com/watch?v=On-_4AppmL8&list=LL&index=135",difficulty:"Easy"},
        {artist: "Nirvana", song: "All Apologies", guitar: true, video: "https://www.youtube.com/watch?v=ojbOnznWljc",difficulty:"Easy"},
        {artist: "Nirvana", song: "Aneurysm", guitar: true, video: "https://www.youtube.com/watch?v=F14Jq4nH718",difficulty:"Medium"},
        {artist: "Nirvana", song: "Been a Son", guitar: false, video: "https://www.youtube.com/watch?v=ZLxubVs1GvY",difficulty:"Easy"},
        {artist:"Nirvana", song:"Big Cheese",guitar:false,video:"https://www.youtube.com/watch?v=INwT8kdU2dQ&ab_channel=PaulieBlueShift",difficulty:"Easy"},
        {artist: "Nirvana", song: "Blew", guitar: true, video: "https://www.youtube.com/watch?v=LJ9FJGJu0Mo",difficulty:"Medium"},
        {artist: "Nirvana", song: "Breed", guitar: true, video: "https://www.youtube.com/watch?v=lJqZhRlFjlk",difficulty:"Medium"},
        {artist: "Nirvana", song: "Come as you are", guitar: true, video: "https://www.youtube.com/watch?v=A2ST1PNaEwg",difficulty:"Easy"},
        {artist: "Nirvana", song: "Dive", guitar: false, video: "https://www.youtube.com/watch?v=hz5kl6jzmTA",difficulty:"Medium"},
        {artist: "Nirvana", song: "Drain You", guitar: true, video: "https://www.youtube.com/watch?v=PkbnbcxHW-Q&list=LL&index=115",difficulty:"Medium"},
        {artist: "Nirvana", song: "Dumb", guitar: false, video: "https://www.youtube.com/watch?v=4ItQZ-aUAJc&list=LL&index=114",difficulty:"Easy"},
        {artist: "Nirvana", song: "Heart-Shaped-Box", guitar: true, video: "https://www.youtube.com/watch?v=DKa6YoeYcKE",difficulty:"Medium"},
        {artist: "Nirvana", song: "In Bloom", guitar: true, video: "https://www.youtube.com/watch?v=kdfQ6pUWjn4&list=LL&index=124",difficulty:"Medium"},
        {artist: "Nirvana", song: "Jesus Doesn't Want Me For A Sunbeam", guitar: true, video: "https://www.youtube.com/watch?v=5Gv1paABORU&list=LL",difficulty:"Easy"},
        {artist: "Nirvana", song: "Lake Of Fire", guitar: false, video: "https://www.youtube.com/watch?v=G6Yv0yp9Mr8",difficulty:"Easy"},
        {artist: "Nirvana", song: "Lithium", guitar: true, video: "https://www.youtube.com/watch?v=NF7xSm-WC4c",difficulty:"Medium"},
        {artist: "Nirvana", song: "Lounge Act", guitar: false, video: "https://www.youtube.com/watch?v=_f8YC-Xr1FA",difficulty:"Medium"},
        {artist: "Nirvana", song: "Love Buzz", guitar: true, video: "https://www.youtube.com/watch?v=vI9I3U9Vu0M&list=LL&index=142",difficulty:"Medium"},
        {artist: "Nirvana", song: "Molly's Lips", guitar: false, video: "https://www.youtube.com/watch?v=M8b5YQiAC7Q",difficulty:"Easy"},
        {artist: "Nirvana", song: "Mr. Moustache", guitar: false, video: "https://www.youtube.com/watch?v=nP1DSIsOSZQ",difficulty:"Medium"},
        {artist: "Nirvana", song: "Oh me", guitar: false, video: "https://www.youtube.com/watch?v=aX8P-KYAbuw",difficulty:"Easy"},
        {artist: "Nirvana", song: "On a Plain", guitar: false, video: "https://www.youtube.com/watch?v=8YkqS4LPFLE",difficulty:"Medium"},
        {artist: "Nirvana", song: "Pennyroyal Tea", guitar: false, video: "https://www.youtube.com/watch?v=T967vlhKVuo",difficulty:"Medium"},
        {artist: "Nirvana", song: "Plateau", guitar: true, video: "https://www.youtube.com/watch?v=MvWFNXgL4-c",difficulty:"Easy"},
        {artist: "Nirvana", song: "Polly", guitar: true, video: "https://www.youtube.com/watch?v=-QNBRS5FgHU",difficulty:"Easy"},
        {artist: "Nirvana", song: "Radio Friendly Unit Shifter", guitar: false, video: "https://www.youtube.com/watch?v=ks9zXnaUeGw",difficulty:"Hard"},
        {artist: "Nirvana", song: "Rape me", guitar: true, video: "https://www.youtube.com/watch?v=1YvujWJZh-0",difficulty:"Medium"},
        {artist: "Nirvana", song: "Sappy", guitar: true, video: "https://www.youtube.com/watch?v=6pjP4g75hQQ",difficulty:"Easy"},
        {artist: "Nirvana", song: "Scentless apprentice", guitar: true, video: "https://www.youtube.com/watch?v=rBy3Iq0qRCQ",difficulty:"Hard"},
        {artist: "Nirvana", song: "School", guitar: true, video: "https://www.youtube.com/watch?v=VKKnB51kJcA",difficulty:"Easy"},
        {artist: "Nirvana", song: "Sliver", guitar: false, video: "https://www.youtube.com/watch?v=Tr1qLFRtZjA",difficulty:"Medium"},
        {artist: "Nirvana", song: "Smells Like Teen Spirit", guitar: true, video: "https://www.youtube.com/watch?v=uGLsasgwub4&list=LL&index=113",difficulty:"Medium"},
        {artist: "Nirvana", song: "Something In The Way", guitar: true, video: "https://www.youtube.com/watch?v=9IkrXfvIQdc",difficulty:"Easy"},
        {artist: "Nirvana", song: "Son of a Gun", guitar: false, video: "https://www.youtube.com/watch?v=89aki9nlVxQ",difficulty:"Easy"},
        {artist: "Nirvana", song: "Stain", guitar: false, video: "https://www.youtube.com/watch?v=NGQw24ZKaz8",difficulty:"Easy"},
        {artist: "Nirvana", song: "Stay Away", guitar: false, video: "https://www.youtube.com/watch?v=1D8kcrSMmzc",difficulty:"Medium"},
        {artist: "Nirvana", song: "Territorial Pissings", guitar: true, video: "https://www.youtube.com/watch?v=nu3r8rYlIFU",difficulty:"Medium"},
        {artist: "Nirvana", song: "The Man Who Sold The World", guitar: true, video: "https://www.youtube.com/watch?v=r3uVsEdxuOg&list=LL&index=136",difficulty:"Medium"},
        {artist: "Nirvana", song: "Tourette's", guitar: false, video: "https://www.youtube.com/watch?v=zQ4He3H6GCQ",difficulty:"Hard"},
        {artist: "Nirvana", song: "Verse Chorus Verse", guitar: false, video: "https://www.youtube.com/watch?v=PFoUIUv_5wg",difficulty:"Medium"},
        {artist: "Nirvana", song: "You Know You're Right", guitar: false, video: "https://www.youtube.com/watch?v=S9v-1jFle1I",difficulty:"Medium"},
        {artist: "Nirvana", song: "Where Did You Sleep Last Night", guitar: true, video: "https://www.youtube.com/watch?v=q5Z6Ssm5wDg",difficulty:"Easy"},
        {artist:"Oasis",song:"Champagne Supernova", guitar:false, video:"https://www.youtube.com/watch?v=I3PpJCzgzz0&ab_channel=SparkyGuitar",difficulty:"Medium"},
        {artist: "Oasis", song: "Wonderwall", guitar: true, video: "https://www.youtube.com/watch?v=Y4yO-4HZpf8&list=LL&index=105",difficulty:"Medium"},
        {artist:"OneRepublic", song:"Counting Stars",guitar:false,video:"https://www.youtube.com/watch?v=YwwJI0JNPxg&ab_channel=MitchGissendaner",difficulty:"Medium"},
        {artist: "Ozzy Osbourne", song: "Crazy Train", guitar: false, video: "https://www.youtube.com/watch?v=G4M5V97CtA4",difficulty:"Hard"},
        {artist:"Ozzy Osbourne", song:"No More Tears",guitar:false,video:"https://www.youtube.com/watch?v=x6HEwH1riDI&ab_channel=Mr.Tabs",difficulty:"Hard"},
        {artist: "Pink Floyd", song: "Another Brick in the Wall", guitar: false, video: "https://www.youtube.com/watch?v=474vpIRt7vU",difficulty:"Medium"},
        {artist: "Pixies", song: "Where is my mind (1988)", guitar: true, video: "https://www.youtube.com/watch?v=ODzhCZ-5f3A",difficulty:"Easy"},
        {artist: "Queen", song: "Another One Bites the Dust", guitar: true, video: "https://www.youtube.com/watch?v=4FiAT79ANxk",difficulty:"Easy"},
        {artist: "Queen", song: "Bohemian Rhapsody", guitar: true, video: "https://www.youtube.com/watch?v=n1WomoCiYqg",difficulty:"Extreme"},
        {artist: "Queen", song: "Killer Queen", guitar: false, video: "https://www.youtube.com/watch?v=00YBEy8SS5U",difficulty:"Hard"},
        {artist: "Queen", song: "We Will Rock You", guitar: true, video: "https://www.youtube.com/watch?v=if9q6BpMd-o",difficulty:"Easy"},
        {artist: "Radiohead", song: "Creep", guitar: true, video: "https://www.youtube.com/watch?v=sdv_zBXZjvQ",difficulty:"Medium"},
        {artist: "Radiohead", song: "No Surprises", guitar: true, video: "https://www.youtube.com/watch?v=sdv_zBXZjvQ",difficulty:"Medium"},
        {artist: "Raffaella Carra", song: "Pedro", guitar: false, video:"https://www.youtube.com/watch?v=yk1EOa7jXe0&ab_channel=christianvib", difficulty:"Medium"},
        {artist: "Rage Against the Machine", song: "Killing in the Name", guitar: true, video: "https://www.youtube.com/watch?v=Fav-D1dJm5M",difficulty:"Medium"},
        {artist: "Rammstein", song: "Amerika", guitar: false, video: "https://www.youtube.com/watch?v=nKR7rbGWJps",difficulty:"Medium"},
        {artist: "Rammstein", song: "Du Hast", guitar: false, video: "https://www.youtube.com/watch?v=K_4_TyXcZcY",difficulty:"Medium"},
        {artist: "Rammstein", song: "Sonne", guitar: false, video: "https://www.youtube.com/watch?v=S_Naw3kq0C8",difficulty:"Medium"},
        {artist: "Ramones", song: "Blitzkrieg Bop", guitar: false, video: "https://www.youtube.com/watch?v=kQW34MNirTU",difficulty:"Easy"},
        {artist: "Red Hot Chili Peppers", song: "Californication", guitar: false, video: "https://www.youtube.com/watch?v=QeZnOpFfGxI",difficulty:"Medium"},
        {artist: "Red Hot Chili Peppers", song: "Can't Stop", guitar: true, video: "https://www.youtube.com/watch?v=GwJXI9xE7h8",difficulty:"Hard"},
        {artist: "Red Hot Chili Pepers", song: "Otherside", guitar: false, video:"https://www.youtube.com/watch?v=l96QD-MbbPU&ab_channel=RockFactory", difficulty:"Medium"},
        {artist: "Red Hot Chili Peppers", song: "Snow", guitar: false, video: "https://www.youtube.com/watch?v=JzRDZ69RHs0",difficulty:"Extreme"},
        {artist: "Redbone", song: "Childish Gambino", guitar: false, video: "https://www.youtube.com/watch?v=qtsoAW5Kk_w",difficulty:"Easy"},
        {artist: "Redbone", song: "Come and Get Your Love", guitar: false, video: "https://www.youtube.com/watch?v=3REAqdh7e-o",difficulty:"Easy"},
        {artist: "R.E.M.", song: "Losing My Religion", guitar: false, video: "https://www.youtube.com/watch?v=Hyv8-aO5kjA",difficulty:"Medium"},
        {artist: "Renaud", song: "Morgane de toi", guitar: false, video: "https://www.youtube.com/watch?v=Zy5QSYlbM-g",difficulty:"Easy"},
        {artist: "Richard Marx", song: "Right Here Waiting for You", guitar: true, video: "https://www.youtube.com/watch?v=VGmngcopdp8",difficulty:"Easy"},
        {artist:"Robin Schulz",song:"Player in C", guitar:false, video:"https://www.youtube.com/watch?v=1K7fK-fccW4&ab_channel=Alexguitar",difficulty:"Easy"},
        {artist: "Scorpions", song: "Always Somewhere", guitar: false, video: "https://www.youtube.com/watch?v=v2LlRb3jQ9w&list=LL&index=153",difficulty:"Easy"},
        {artist: "Scorpions", song: "Gypsy Life", guitar: false, video: "https://www.youtube.com/watch?v=nkbU1DnxDUo",difficulty:"Medium"},
        {artist: "Scorpions", song: "House of Cards", guitar: false, video: "https://www.youtube.com/watch?v=WUwIAxZ9oFg",difficulty:"Medium"},
        {artist: "Scorpions", song: "Send Me an Angel", guitar: false, video: "https://www.youtube.com/watch?v=fvWj63G7Yk0",difficulty:"Medium"},
        {artist: "Scorpions", song: "Still Loving You", guitar: true, video: "https://www.youtube.com/watch?v=KfMZ6QImHnM&list=LL&index=177",difficulty:"Hard"},
        {artist: "Scorpions", song: "Wind of Change", guitar: true, video: "https://www.youtube.com/watch?v=TM-v0624MXU&list=LL&index=70",difficulty:"Hard"},
        {artist: "Shaka Ponk", song: "I'm Picky", guitar: true, video: "https://www.youtube.com/watch?v=GnwWsiayT8o",difficulty:"Medium"},
        {artist:"Shawn Mendes", song:"There's Nothing Holdin' Me Back",guitar:false,video:"https://www.youtube.com/watch?v=jYo86UVYcjw&ab_channel=JoshuaCruz",difficulty:"Medium"},
        {artist: "Slash Featuring Myles Kennedy and The Conspirators", song: "Anastasia", guitar: false, video: "https://www.youtube.com/watch?v=8XmzOKBacuM",difficulty:"Extreme"},
        {artist:"SlipKnot",song:"Before I Forget", guitar:false, video:"https://www.youtube.com/watch?v=44fRYUp4qzw&ab_channel=DottiBrothers",difficulty:"Hard"},
        {artist: "Sound", song: "Sound of Elephant", guitar: true, video: "https://www.youtube.com/watch?v=sAi30S3M5bU",difficulty:"Hard"},
        {artist: "Survivor", song: "Eye of the Tiger", guitar: false, video: "https://www.youtube.com/watch?v=1x3FetxuQbk",difficulty:"Easy"},
        {artist:"Tame Impala",song:"The Less I Know The Better", guitar:false, video:"",difficulty:"Medium"},
        {artist: "TELEPHONE", song: "Ça (C'est vraiment toi)", guitar: true, video: "https://www.youtube.com/watch?v=ttvD4noVeKY&list=LL&index=130",difficulty:"Hard"},
        {artist: "TELEPHONE", song: "Un autre monde", guitar: false, video: "https://www.youtube.com/watch?v=4ghB1MQpv6c",difficulty:"Medium"},
        {artist: "The Animals", song: "House of the Rising Sun", guitar: true, video: "https://www.youtube.com/watch?v=OfafS6f9Q_Y",difficulty:"Medium"},
        {artist: "The Chainsmokers", song: "Don't Let Me Down", guitar: false, video: "https://warz.my.canva.site/dagj1gunwkq",difficulty:"Easy"},
        {artist: "The Clash", song: "Should I Stay or Should I Go", guitar: false, video: "https://www.youtube.com/watch?v=6BXoiTn31Us",difficulty:"Medium"},
        {artist: "The Connells", song: "74-'75", guitar: false, video: "https://www.youtube.com/watch?v=ObogUA8pxTQ",difficulty:"Easy"},
        {artist: "The Cranberries", song: "Zombie", guitar: true, video: "https://www.youtube.com/watch?v=lOsVMq8Zm5w&list=LL&index=87",difficulty:"Medium"},
        {artist:"Theme Song",song:"Fortnite", guitar:false, video:"https://www.youtube.com/watch?v=qnHeuapkzac&ab_channel=YouTab",difficulty:"Easy"},
        {artist: "Theme Song", song: "Mario", guitar: false, video: "https://www.youtube.com/watch?v=8Z6WA3rXEq0",difficulty:"Easy"},
        {artist: "THE OFFSPRING", song: "Come Out and Play", guitar: true, video: "https://www.youtube.com/watch?v=2jnF2OOxS2g",difficulty:"Medium"},
        {artist:"The OFFSPRING",song:"Gone Away", guitar:false, video:"https://www.youtube.com/watch?v=trpMZfgBPSE&ab_channel=DottiBrothers",difficulty:"Medium"},
        {artist: "THE OFFSPRING", song: "The Kids Aren't Alright", guitar: false, video: "https://www.youtube.com/watch?v=PcBt2p4Qi0w&list=LL&index=111",difficulty:"Hard"},
        {artist: "The Police", song: "Every Breath You Take", guitar: false, video:"https://www.youtube.com/watch?v=JvRLYuiyURk&ab_channel=GuitarZero2HeroExpress", difficulty:"Medium"},
        {artist: "The Rolling Stones", song: "(I Can't Get No) Satisfaction", guitar: false, video:"https://www.youtube.com/watch?v=6kxDsfdmDB0&ab_channel=DeGaspari%27sGuitarLessons", difficulty:"Medium"},
        {artist: "The White Stripes", song: "Seven Nation Army", guitar: true, video: "https://www.youtube.com/watch?v=37DoRnRBvoQ",difficulty:"Medium"},
        {artist: "Twenty One Pilots", song: "Stressed Out", guitar: false, video: "https://www.youtube.com/watch?v=e85fH7paS-o",difficulty:"Easy"},
        {artist: "U2", song: "Sunday Bloody Sunday", guitar: true, video: "https://www.youtube.com/watch?v=-9LZdCchgdc",difficulty:"Medium"},
        {artist: "Vanessa Paradis & -M-", song: "La Seine", guitar: true, video: "https://www.youtube.com/watch?v=PsD45ErjTlU",difficulty:"Easy"},
        {artist: "Van Halen", song: "Eruption", guitar: true, video: "https://www.youtube.com/watch?v=GTvcyYUWV2M",difficulty:"Hard"},
        {artist:"Weezer", song:"The Sweater Song ",guitar:false,video:"https://www.youtube.com/watch?v=-lYZ1sqtD-Q&ab_channel=Egor5287",difficulty:"Medium"},
        {artist: "Wham!", song: "Last Christmas", guitar: true, video: "https://yjrthn.my.canva.site/dagjuzh-bcc",difficulty:"Easy"},
        {artist: "Yeat", song: "Monëy so Big", guitar: false, video: "https://www.youtube.com/watch?v=OV0bYV5BUsM", difficulty:"Medium"},
    
    ];


    document.getElementById('sortCriteria').addEventListener('change', function() {
        const criteria = this.value;
        renderTaskList(songs, criteria);
    });

    // Initial render
    renderTaskList(songs, 'artist');

    function renderTaskList(songs, criteria) {
        const sortedSongs = [...songs].sort((a, b) => {
            if (a[criteria] < b[criteria]) return -1;
            if (a[criteria] > b[criteria]) return 1;
            return 0;
        });

        const tableBody = document.querySelector('tbody'); // Assuming your table has a <tbody>
        tableBody.innerHTML = '';

        sortedSongs.forEach(song => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${song.artist}</td>
                <td>${song.song}</td>
                <td>${song.guitar ? '✔️' : ''}</td>
                <td>${song.video ? `<a href="${song.video}" target="_blank">Vidéo</a>` : ''}</td>
                <td>${song.difficulty}<td>
                ${song.info ? `<a href="${song.info}" target="blank">Info</a>`: ''}`;
            tableBody.appendChild(row);
        });
    }
});




const songs = [
    {artist: "ABBA", song: "Gimme Gimme!", guitar: false, video: "https://www.youtube.com/watch?v=M5J6IaW2RmY", difficulty:"Easy"},
    {artist:"AC/DC",song:"Hard as a Rock", guitar:false, video:"https://www.youtube.com/watch?v=tIxxhfNC-ig&ab_channel=DonegalGuitarClub",difficulty:"Medium"},
    {artist: "AC/DC", song: "Back in Black", guitar: true, video: "https://www.youtube.com/watch?v=NFgE_xDxCZ4&list=LL&index=179",difficulty:"Medium"},
    {artist: "AC/DC ", song: "Hells bells ", guitar: true, video: "https://www.youtube.com/watch?v=GHN0wn7ofMA",difficulty:"Medium"},
    {artist: "AC/DC", song: "Highway to Hell", guitar: true, video: "https://www.youtube.com/watch?v=-ocEF19Awe8&list=LL&index=108",difficulty:"Easy"},
    {artist: "AC/DC", song: "Thunderstruck", guitar: true, video: "https://www.youtube.com/watch?",difficulty:"Hard"},
    {artist: "AC/DC", song: "TNT", guitar: true, video: "https://www.youtube.com/watch?v=mWMiHIP5J28&list=LL&index=122",difficulty:"Easy"},
    {artist:"AC/DC",song:"Whiskey on the rocks", guitar:false, video:"",difficulty:"Medium"},
    {artist: "AC/DC", song: "Whole Lotta Rosie", guitar: false, video: "https://www.youtube.com/watch?v=n8pG8mkynCE",difficulty:"Medium"},
    {artist: "Adèle", song: "Someone Like You", guitar: false, video: "https://www.youtube.com/watch?v=mjwqrQkMLpQ",difficulty:"Easy"},
    {artist:"Aerosmiths", song:"Dream On",guitar:false,video:"https://www.youtube.com/watch?v=YCSWCojyctM&ab_channel=Mr.Tabs",difficulty:"Hard"},
    {artist: "Alan Walker", song: "Faded", guitar: false, video: "https://www.youtube.com/watch?v=QLZzhzghxZI",difficulty:"Easy"},
    {artist: "Among Us", song: "Chanson thème", guitar: true, video: "https://warz.my.canva.site/dagj5jxzaba",difficulty:"Easy"},
    {artist: "Amy McDonald", song: "This is the Life", guitar: false, video: "https://www.youtube.com/watch?v=22D6GGO-IsY",difficulty:"Medium"},
    {artist: "Angry Birds", song: "Chanson thème", guitar: false, video: "https://www.youtube.com/watch?v=yW1vqmxnc8E&list=LL&index=216",difficulty:"Easy"},
    {artist: "Aqua", song: "Barbie Girl", guitar: false, video: "https://www.youtube.com/watch?v=NWkHTXInQN8",difficulty:"Easy"},
    {artist: "Ariana Grande", song: "One Last Time", guitar: false, video: "https://warz.my.canva.site/partition",difficulty:"Easy"},
    {artist: "Avicii", song: "Wake Me Up", guitar: false, video: "https://www.youtube.com/watch?v=ttQ4zKNH3l0",difficulty:"Medium"},
    {artist: "Artic Monkeys", song: "Do I Wanna Know", guitar: true, video: "https://www.youtube.com/watch?v=3muj9PkZfJM",difficulty:"Medium"},
    {artist: "Axel F", song: "Crazy Frog (Rock)", guitar: false, video: "https://www.youtube.com/watch?v=VXk2FpZmk2k&list=LL&index=33",difficulty:"Hard"},
    {artist: "Baby Bash", song: "Suga Suga", guitar: true, video: "https://www.youtube.com/watch?v=H22UVTtjKkc&list=LL&index=227",difficulty:"Medium"},
    {artist: "Beach House", song: "Space Song", guitar: false, video:"https://www.youtube.com/watch?v=Gya5kPy8evU&ab_channel=JoshuaCruz", difficulty:"Medium"},
    {artist: "Black Eyed Peas", song: "I Gotta Feeling", guitar: false, video: "https://www.youtube.com/watch?v=OMl17rRWXiw",difficulty:"Easy"},
    {artist: "Black Sabbath", song: "Paranoid", guitar: false, video: "https://www.youtube.com/watch?v=B2R3WZXzsNA",difficulty:"Medium"},
    {artist:"Black Sabbath", song:"Iron Man",guitar:false ,video:"https://www.youtube.com/watch?v=SAH_e5paU2Q&ab_channel=Mr.Tabs",difficulty:"Medium"},
    {artist: "Blur", song: "Song 2", guitar: false, video:"https://www.youtube.com/watch?v=jqPSKdaBD_U&ab_channel=EtiennedeLoriol-GuitarLessons", difficulty:"Medium"},
    {artist: "Bobby Helms", song: "Jingle Bell Rock", guitar: false, video: "https://www.youtube.com/watch?v=Fh25K_cYHAU",difficulty:"Medium"},
    {artist: "Bobby McFerrin", song: "Don't Worry Be Happy", guitar: false, video: "https://www.youtube.com/watch?v=iQWyZ07xXUY",difficulty:"Easy"},
    {artist:"Bon Jovi", song:"You Give Love a Bad Name",guitar:false,video:"https://www.youtube.com/watch?v=cB_eDlfyL9Y&ab_channel=Mr.Tabs",difficulty:"Medium"},
    {artist: "Céline Dion", song: "My Heart Will Go On", guitar: false, video:"https://www.youtube.com/watch?v=xLoJyjzY6mc&ab_channel=MikeAtsushi", difficulty:"Hard"},
    {artist: "Brenda Lee", song: "Rockin' Around the Christmas Tree", guitar: false, video: "https://www.youtube.com/watch?v=NPUPq7Q3gGM&list=LL&index=98",difficulty:"Medium"},
    {artist:"C'EST PAS SORCIER",song:"C'est pas Sorcier", guitar:false, video:"https://www.youtube.com/watch?v=TjMJBdtKwms&ab_channel=Saturax",difficulty:"Medium"},
    {artist: "Chris Isaak", song: "Wicked Game", guitar: false, video:"https://www.youtube.com/watch?v=DUlGas6qq-I&ab_channel=GuitarZero2HeroExpress", difficulty:"Medium"},
    {artist: "Christmas", song: "We Wish You a Merry Christmas", guitar: true, video: "https://yjrthn.my.canva.site/dagjvltlex0",difficulty:"Easy"},
    {artist: "Chuck Berry", song: "Johnny B Goode", guitar: true, video: "https://www.youtube.com/watch?v=to_IKcCqCNA",difficulty:"Hard"},
    {artist: "Coldplay", song: "Adventure Of A Lifetime", guitar: true, video: "https://www.youtube.com/watch?v=ZFi-2sTl3Dg",difficulty:"Medium"},
    {artist: "Coldplay", song: "Clocks", guitar: false, video: "https://www.youtube.com/watch?v=D_9TaHc7ZxE",difficulty:"Medium"},
    {artist: "Daft Punk", song: "Get Lucky", guitar: false, video: "https://www.youtube.com/watch?v=UJla-UJnr5w",difficulty:"Medium"},
    {artist: "David Kushner", song: "Daylight", guitar: false, video: "",difficulty:"Easy"},
    {artist: "Deep Purple", song: "Smoke on the Water", guitar: true, video: "https://www.youtube.com/watch?v=7kKoOPf7nWc&list=LL&index=181",difficulty:"Easy"},
    {artist:"Depeche Mode", song:"Personnal Jesus",guitar:false,video:"https://www.youtube.com/watch?v=NsAxVei0shE&ab_channel=DottiBrothers", difficulty:"Medium"},
    {artist: "Dick Dale", song: "Miserlou", guitar: true, video: "https://www.youtube.com/watch?v=7SkL4ZGXNis",difficulty:"Extreme"},
    {artist: "Dire Straits", song: "Money for Nothing", guitar: true, video: "https://www.youtube.com/watch?v=uDZudIAX-V8",difficulty:"Medium"},
    {artist: "Dire Straits", song: "Sultans of Swing", guitar: true, video: "https://www.youtube.com/watch?v=H7N2nvBdZ4g&list=LL&index=126",difficulty:"Hard"},
    {artist: "Dire Straits", song: "Walk of Life", guitar: false, video: "https://www.youtube.com/watch?v=1EcQNEM5tlY",difficulty:"Medium"},
    {artist: "Drake", song: "Hotline Bling", guitar: false, video: "https://www.youtube.com/watch?v=pJlsXZXbnhw",difficulty:"Easy"},
    {artist: "Eagle", song: "Hotel California", guitar: true, video: "https://www.youtube.com/watch?v=afWkEabj4JA",difficulty:"Hard"},
    {artist: "Eminem", song: "Lose Yourself", guitar: true, video: "https://www.youtube.com/watch?v=hyTuJremJDM&list=LL&index=69",difficulty:"Easy"},
    {artist: "Eminem", song: "The Real Slim Shady", guitar: false, video: "https://www.youtube.com/watch?v=5qiL6skP_S0",difficulty:"Easy"},
    {artist:"Enya", song:"Freaks",guitar:false,video:"https://www.youtube.com/watch?v=e9wzN47Skww&ab_channel=Egor5287",difficulty:"Medium"},
    {artist: "Eric Weissberg", song: "Dueling Banjos", guitar: false, video: "https://www.youtube.com/watch?v=NA5J4jG2REo&list=LL&index=103",difficulty:"Extreme"},
    {artist: "Europe", song: "The Final Countdown", guitar: false, video: "https://www.youtube.com/watch?v=-l1bhvxnQg8&list=LL&index=119",difficulty:"Medium"},
    {artist:"Eyesdress", song:"Jealous",guitar:false,video:"https://www.youtube.com/watch?v=mYenDfAt8sM&ab_channel=Egor5287",difficulty:"Easy"},
    {artist: "Foo Fighters", song: "Everlong", guitar: false, video: "https://www.youtube.com/watch?v=pn12DsoVHrg",difficulty:"Medium"},
    {artist:"Fortnite",song:"Rock Out", guitar:false, video:"https://www.youtube.com/watch?v=M3wVbtL5LSI&ab_channel=HenryL4",difficulty:"Hard"},   
    {artist:"Frozy", song:"Kompa - She Said She's From The Islands",guitar:false,video:"https://www.youtube.com/watch?v=-14jwSc8UUI&ab_channel=MikeAtsushi",difficulty:"Easy"},
    {artist: "Gary Moore", song: "Still Got The Blues", guitar: false, video:"https://www.youtube.com/watch?v=qZp6chNS0MI&ab_channel=Mr.Tabs", difficulty:"Hard"},
    {artist: "Green Day", song: "1981", guitar: false, video: "https://www.youtube.com/watch?v=bXgO3kcdfvQ",difficulty:"Easy"},
    {artist: "Green Day", song: "21 Guns", guitar: true, video: "https://www.youtube.com/watch?v=4h6wiKaXnC8",difficulty:"Easy"},
    {artist: "Green Day", song: "American Idiot", guitar: true, video: "https://www.youtube.com/watch?v=8mU5W5RxwyA&list=LL&index=2",difficulty:"Easy"},
    {artist: "Green Day", song: "Basket Case", guitar: true, video: "https://www.youtube.com/watch?v=poSLef1O4VI&list=LL&index=97",difficulty:"Medium"},
    {artist: "Green Day", song: "Boulevard of Broken Dreams", guitar: true, video: "https://www.youtube.com/watch?v=hWdyDWUAM-U",difficulty:"Easy"},
    {artist: "Green Day", song: "Emenius Sleepus", guitar: false, video: "https://www.youtube.com/watch?v=_Mejn2HyOLE",difficulty:"Easy"},
    {artist:"Green Day", song:"Extraordinary Girl",guitar:false,video:"https://www.youtube.com/watch?v=Ex00cI1Rziw&ab_channel=Strachechannel",difficulty:"Easy"},
    {artist:"Green Day", song:"F.O.D",guitar: false,video:"https://www.youtube.com/watch?v=v-CZ7-l-ZkQ&ab_channel=Strachechannel",difficulty:"Easy"},
    {artist: "Green Day", song: "Good Riddance", guitar: true, video: "https://www.youtube.com/watch?v=-PBapVNukdw&list=LL&index=106",difficulty:"Medium"},
    {artist: "Green Day", song: "Holiday", guitar: false, video: "https://www.youtube.com/watch?v=f_kJIo-o_jk",difficulty:"Easy"},
    {artist: "Green Day", song: "Know Your Enemy", guitar: false, video: "https://www.youtube.com/watch?v=Af4zzuQnOfQ",difficulty:"Easy"},
    {artist:"Green Day", song:"Living in the '20s",guitar:false,video:"https://www.youtube.com/watch?v=2WxMlnZctrw&ab_channel=JoanManuelDefelippe",difficulty:"Medium"},
    {artist: "Green Day", song: "Peacemaker", guitar: false, video: "https://www.youtube.com/watch?v=cl5W2gEIL60",difficulty:"Medium"},
    {artist:"Green Day", song:"She",guitar:false ,video:"https://www.youtube.com/watch?v=MRjvLWPL9TE&ab_channel=DottiBrothers",difficulty:"Easy"},
    {artist: "Green Day", song: "The American Dream Is Killing Me", guitar: false, video: "https://www.youtube.com/watch?v=LuE9jjqI_pQ",difficulty:"Medium"},
    {artist: "Green Day", song: "Wake Me Up When September Ends", guitar: false, video: "https://www.youtube.com/watch?v=apJEmYSoSIs",difficulty:"Medium"},
    {artist: "Green Day", song: "Welcome to Paradise", guitar: false, video: "https://www.youtube.com/watch?v=NB7QGmuaf8s",difficulty:"Medium"},
    {artist: "Green Day", song: "When I Come Around", guitar: true, video: "https://www.youtube.com/watch?v=82yLzB0Jv5k&list=LL&index=13",difficulty:"Easy"},
    {artist: "Gummibär", song: "I'm a Gummy Bear", guitar: false, video: "https://www.youtube.com/watch?v=qVFoEn0MMY4&list=LL&index=214",difficulty:"Easy"},
    {artist: "Guns N' Roses", song: "Don't Cry", guitar: false, video: "https://www.youtube.com/watch?v=eaLPAkNgpJE",difficulty:"Medium"},
    {artist: "Guns N' Roses", song: "Knockin' on Heaven's Door", guitar: false, video:"https://www.youtube.com/watch?v=z_mC7TCJzbI&ab_channel=Mr.Tabs", difficulty:"Medium"},
    {artist: "Guns N' Roses", song: "November Rain", guitar: false, video: "https://www.youtube.com/watch?v=fRIQEDrzSHI",difficulty:"Extreme"},
    {artist: "Guns N' Roses", song: "Sweet Child O' Mine", guitar: false, video: "https://www.youtube.com/watch?v=WW_iOXWCGLE",difficulty:"Extreme"},
    {artist: "Huey Lewis & The News", song: "The Power of Love", guitar: false, video: "https://www.youtube.com/watch?v=a0Eo5hyniuc&list=LL&index=108",difficulty:"Medium"},
    {artist: "Indochine", song: "J'ai demandé à la lune", guitar: true, video: "https://www.youtube.com/watch?v=_hzKjaygcfA",difficulty:"Easy"},
    {artist: "Indochine", song: "L'aventurier", guitar: true, video: "https://www.youtube.com/watch?v=OtDvFTUMhHw",difficulty:"Easy"},
    {artist: "Indochine", song: "Un été français", guitar: false, video: "https://www.youtube.com/watch?v=k_3wZSWoNa8",difficulty:"Easy"},
    {artist: "Isaac Albéniz", song: "Asturias (The middle of the Night)", guitar: false, video: "https://www.youtube.com/watch?v=CCVBDCavI_c",difficulty:"Extreme"},
    {artist: "Jean Jacques Goldman", song: "Quand la musique est bonne", guitar: false, video: "https://www.youtube.com/watch?v=FDY74A04G1I",difficulty:"Easy"},
    {artist:"Jennifer Lopez", song:"On the floor",guitar:false,video:"https://www.youtube.com/watch?v=3aSncqvQ_v8&ab_channel=singlestring-onestring",difficulty:"Medium"},
    {artist: "Joan Jett", song: "I Love Rock'n'Roll", guitar: true, video: "https://www.youtube.com/watch?v=D_yLqkfLdN8&list=LL&index=173",difficulty:"Easy"},
    {artist: "John Lennon & The Plastic Ono Band", song: "Imagine", guitar: false, video: "https://www.youtube.com/watch?v=Aae6iN3YtK8",difficulty:"Easy"},
    {artist: "Joyeux Anniversaire", song: "Joyeux Anniversaire", guitar: true, video: "https://www.youtube.com/watch?v=DUP_wOwxAIw&list=LL&index=239",difficulty:"Easy"},
    {artist: "Kaelo", song: "Way Down We Go", guitar: true, video: "https://www.youtube.com/watch?v=umO5bml-Fk8",difficulty:"Medium"},
    {artist: "Kiss", song: "I Was Made For Lovin' You", guitar: true, video: "https://www.youtube.com/watch?v=q8gDR_20q_M&list=LL&index=90",difficulty:"Medium"},
    {artist:"Lady Gaga", song:"Judas",guitar:false,video:"https://www.youtube.com/watch?v=9zB5-NsuQJU&ab_channel=JoshuaCruz",difficulty:"Medium"},
    {artist:"Lady Gaga", song:"Poker Face",guitar:false,video:"https://www.youtube.com/watch?v=EsKbDCF7_m4&ab_channel=JoshuaCruz",difficulty:"Easy"},
    {artist: "Led Zeppelin", song: "Kashmir", guitar: false, video: "https://www.youtube.com/watch?v=O-GtetAEGbg",difficulty:"Hard"},
    {artist: "Led Zeppelin", song: "Stairway to Heaven", guitar: false, video:"https://www.youtube.com/watch?v=hyefrmWZL6s&ab_channel=Mr.Tabs", difficulty:"Hard"},
    {artist: "Lenny Kravitz", song: "Are You Gonna Go My Way", guitar: false, video:"https://www.youtube.com/watch?v=eZ6wjZcW0oA&ab_channel=Mr.Tabs", difficulty:"Hard"},
    {artist: "Les Inconnus", song: "C'est Toi Que Je T'aime", guitar: true, video: "https://www.youtube.com/watch?v=mMDDQfgl6_c",difficulty:"Easy"},
    {artist: "Limp Bizkit", song: "Behind Blue Eyes", guitar: true, video: "https://www.youtube.com/watch?v=T4RMeof-mNk&list=LL&index=120",difficulty:"Medium"},
    {artist:"Linkin Park",song:"In The End", guitar:false, video:"https://www.youtube.com/watch?v=0dytH1lzeWg&ab_channel=DottiBrothers",difficulty:"Medium"},
    {artist: "Linkin Park", song: "Numb", guitar: false, video: "https://www.youtube.com/watch?v=2y3NzrX7Ftk",difficulty:"Medium"},
    {artist: "Los Lobos & Gipsy Kings", song: "La Bamba", guitar: true, video: "https://www.youtube.com/watch?v=iY7OVbwL2fc",difficulty:"Medium"},
    {artist: "Lynyrd Skynyrd", song: "Free Bird", guitar: false, video: "https://www.youtube.com/watch?v=raZBLp4zowg&list=LL&index=32",difficulty:"Extreme"},
    {artist: "Lynyrd Skynyrd", song: "Sweet Home Alabama", guitar: false, video:"https://www.youtube.com/watch?v=jO-1W79oS5M&ab_channel=Mr.Tabs", difficulty:"Medium"},
    {artist: "Maneskin", song: "Beggin'", guitar: false, video: "https://www.youtube.com/watch?v=8yigppmsBxA",difficulty:"Medium"},
    {artist:"Maneskin", song:"I Wanna Be Your Slave",guitar:false,video:"https://www.youtube.com/watch?v=K9notPNqIUY&ab_channel=loicflb",difficulty:"Medium"},
    {artist:"Maneskin",song:"Valentine", guitar:false, video:"https://www.youtube.com/watch?v=w-amTMnbUqI&ab_channel=BehnamDabestanizade",difficulty:"Medium"},
    {artist: "Marilyn Manson", song: "Sweet Dreams", guitar: true, video: "https://www.youtube.com/watch?v=LnoIsvTrsnM",difficulty:"Medium"},
    {artist:"Men At Work", song:"Who Can It Be Now ? ",guitar: false, video:"https://www.youtube.com/watch?v=WbtRlgyC5UI&ab_channel=CWZGuitar",difficulty:"Easy"},
    {artist: "Metallica", song: "Enter Sandman", guitar: true, video: "https://www.youtube.com/watch?v=NIAkEJp8i_Y",difficulty:"Medium"},
    {artist: "Metallica", song: "Fade To Black", guitar: true, video: "https://www.youtube.com/watch?v=gv7tQV4BJgA&list=LL&index=127",difficulty:"Hard"},
    {artist: "Metallica", song: "For Whom the Bell Tolls", guitar: false, video: "https://www.youtube.com/watch?v=cniVsbWBqwY",difficulty:"Medium"},
    {artist: "Metallica", song: "Fuel", guitar: false, video: "https://www.youtube.com/watch?v=O0hafFjUgE0&list=LL&index=12",difficulty:"Hard"},
    {artist:"Metallica", song:"Lux AEterna",guitar:false,video:"https://www.youtube.com/watch?v=q5juZoqEbH8&ab_channel=Mr.Tabs",difficulty:"Hard"},
    {artist: "Metallica", song: "Master of Puppets", guitar: true, video: "https://www.youtube.com/watch?v=S6jkEOIHJFg&list=LL&index=123",difficulty:"Extreme"},
    {artist: "Metallica", song: "Nothing Else Matters (Easy - Normal)", guitar: true, video: "https://www.youtube.com/watch?v=pwEm2QNWYQo&list=LL&index=146",difficulty:"Medium"},
    {artist: "Metallica", song: "One", guitar: true, video: "https://www.youtube.com/watch?v=2DwZzHimUlU",difficulty:"Extreme"},
    {artist: "Metallica", song: "Ride The Lightning", guitar: false, video: "https://www.youtube.com/watch?v=MFJU_PjT0Pw",difficulty:"Extreme"},
    {artist: "Metallica", song: "Seek & Destroy", guitar: true, video: "https://www.youtube.com/watch?v=z44pg4ETY3k",difficulty:"Medium"},
    {artist: "Metallica", song: "The Unforgiven", guitar: true, video: "https://www.youtube.com/watch?v=0ESwHgrqPYg&list=LL&index=137",difficulty:"Medium"},
    {artist:"Metallica", song:"Wherever I may roam",guitar:false,video:"https://www.youtube.com/watch?v=L_eaLgBG5CQ&ab_channel=JulienMENARD",difficulty:"Hard"},
    {artist: "Michael Jackson", song: "Beat It", guitar: true, video: "https://www.youtube.com/watch?v=_MEq8JzK0qM&list=LL&index=170",difficulty:"Medium"},
    {artist:"Michael Jackson", song:"They Don't Care About Us",guitar:false,video:"https://www.youtube.com/watch?v=98e-VdYmhWg&ab_channel=MrKalidasu",difficulty:"Medium"},
    {artist: "Muse", song: "Hysteria", guitar: true, video: "https://www.youtube.com/watch?v=FWWppuONlsU&list=LL&index=133",difficulty:"Hard"},
    {artist: "Muse", song: "New Born", guitar: true, video: "https://www.youtube.com/watch?v=WIxZNlK5QX0&list=LL&index=132",difficulty:"Extreme"},
    {artist: "Muse", song: "Unintended", guitar: false, video: "https://www.youtube.com/watch?v=bvVu1lEtLN8&list=LL&index=224",difficulty:"Easy"},
    {artist: "Muse", song: "Uprising", guitar: false, video: "https://www.youtube.com/watch?v=7I7p2DzDUtk",difficulty:"Medium"},
    {artist: "Narciso Yepes", song: "Jeux interdits", guitar: true, video: "https://www.youtube.com/watch?v=DGfPSbPp_eA&list=LL&index=104",difficulty:"Medium"},
    {artist: "Nicki Minaj", song: "Starships", guitar: false, video:"https://www.youtube.com/shorts/bFo3Qd8lxhI", difficulty:"Medium"},
    {artist: "Nirvana", song: "About A Girl", guitar: true, video: "https://www.youtube.com/watch?v=R44ENb5G5j4&list=LL&index=116",difficulty:"Easy"},
    {artist: "Nirvana", song: "About A Girl (Unplugged - Acoustic 1988)", guitar: true, video: "https://www.youtube.com/watch?v=On-_4AppmL8&list=LL&index=135",difficulty:"Easy"},
    {artist: "Nirvana", song: "All Apologies", guitar: true, video: "https://www.youtube.com/watch?v=ojbOnznWljc",difficulty:"Easy"},
    {artist: "Nirvana", song: "Aneurysm", guitar: true, video: "https://www.youtube.com/watch?v=F14Jq4nH718",difficulty:"Medium"},
    {artist: "Nirvana", song: "Been a Son", guitar: false, video: "https://www.youtube.com/watch?v=ZLxubVs1GvY",difficulty:"Easy"},
    {artist:"Nirvana", song:"Big Cheese",guitar:false,video:"https://www.youtube.com/watch?v=INwT8kdU2dQ&ab_channel=PaulieBlueShift",difficulty:"Easy"},
    {artist: "Nirvana", song: "Blew", guitar: true, video: "https://www.youtube.com/watch?v=LJ9FJGJu0Mo",difficulty:"Medium"},
    {artist: "Nirvana", song: "Breed", guitar: true, video: "https://www.youtube.com/watch?v=lJqZhRlFjlk",difficulty:"Medium"},
    {artist: "Nirvana", song: "Come as you are", guitar: true, video: "https://www.youtube.com/watch?v=A2ST1PNaEwg",difficulty:"Easy"},
    {artist: "Nirvana", song: "Dive", guitar: false, video: "https://www.youtube.com/watch?v=hz5kl6jzmTA",difficulty:"Medium"},
    {artist: "Nirvana", song: "Drain You", guitar: true, video: "https://www.youtube.com/watch?v=PkbnbcxHW-Q&list=LL&index=115",difficulty:"Medium"},
    {artist: "Nirvana", song: "Dumb", guitar: false, video: "https://www.youtube.com/watch?v=4ItQZ-aUAJc&list=LL&index=114",difficulty:"Easy"},
    {artist: "Nirvana", song: "Heart-Shaped-Box", guitar: true, video: "https://www.youtube.com/watch?v=DKa6YoeYcKE",difficulty:"Medium"},
    {artist: "Nirvana", song: "In Bloom", guitar: true, video: "https://www.youtube.com/watch?v=kdfQ6pUWjn4&list=LL&index=124",difficulty:"Medium"},
    {artist: "Nirvana", song: "Jesus Doesn't Want Me For A Sunbeam", guitar: true, video: "https://www.youtube.com/watch?v=5Gv1paABORU&list=LL",difficulty:"Easy"},
    {artist: "Nirvana", song: "Lake Of Fire", guitar: false, video: "https://www.youtube.com/watch?v=G6Yv0yp9Mr8",difficulty:"Easy"},
    {artist: "Nirvana", song: "Lithium", guitar: true, video: "https://www.youtube.com/watch?v=NF7xSm-WC4c",difficulty:"Medium"},
    {artist: "Nirvana", song: "Lounge Act", guitar: false, video: "https://www.youtube.com/watch?v=_f8YC-Xr1FA",difficulty:"Medium"},
    {artist: "Nirvana", song: "Love Buzz", guitar: true, video: "https://www.youtube.com/watch?v=vI9I3U9Vu0M&list=LL&index=142",difficulty:"Medium"},
    {artist: "Nirvana", song: "Molly's Lips", guitar: false, video: "https://www.youtube.com/watch?v=M8b5YQiAC7Q",difficulty:"Easy"},
    {artist: "Nirvana", song: "Mr. Moustache", guitar: false, video: "https://www.youtube.com/watch?v=nP1DSIsOSZQ",difficulty:"Medium"},
    {artist: "Nirvana", song: "Oh me", guitar: false, video: "https://www.youtube.com/watch?v=aX8P-KYAbuw",difficulty:"Easy"},
    {artist: "Nirvana", song: "On a Plain", guitar: false, video: "https://www.youtube.com/watch?v=8YkqS4LPFLE",difficulty:"Medium"},
    {artist: "Nirvana", song: "Pennyroyal Tea", guitar: false, video: "https://www.youtube.com/watch?v=T967vlhKVuo",difficulty:"Medium"},
    {artist: "Nirvana", song: "Plateau", guitar: true, video: "https://www.youtube.com/watch?v=MvWFNXgL4-c",difficulty:"Easy"},
    {artist: "Nirvana", song: "Polly", guitar: true, video: "https://www.youtube.com/watch?v=-QNBRS5FgHU",difficulty:"Easy"},
    {artist: "Nirvana", song: "Radio Friendly Unit Shifter", guitar: false, video: "https://www.youtube.com/watch?v=ks9zXnaUeGw",difficulty:"Hard"},
    {artist: "Nirvana", song: "Rape me", guitar: true, video: "https://www.youtube.com/watch?v=1YvujWJZh-0",difficulty:"Medium"},
    {artist: "Nirvana", song: "Sappy", guitar: true, video: "https://www.youtube.com/watch?v=6pjP4g75hQQ",difficulty:"Easy"},
    {artist: "Nirvana", song: "Scentless apprentice", guitar: true, video: "https://www.youtube.com/watch?v=rBy3Iq0qRCQ",difficulty:"Hard"},
    {artist: "Nirvana", song: "School", guitar: true, video: "https://www.youtube.com/watch?v=VKKnB51kJcA",difficulty:"Easy"},
    {artist: "Nirvana", song: "Sliver", guitar: false, video: "https://www.youtube.com/watch?v=Tr1qLFRtZjA",difficulty:"Medium"},
    {artist: "Nirvana", song: "Smells Like Teen Spirit", guitar: true, video: "https://www.youtube.com/watch?v=uGLsasgwub4&list=LL&index=113",difficulty:"Medium"},
    {artist: "Nirvana", song: "Something In The Way", guitar: true, video: "https://www.youtube.com/watch?v=9IkrXfvIQdc",difficulty:"Easy"},
    {artist: "Nirvana", song: "Son of a Gun", guitar: false, video: "https://www.youtube.com/watch?v=89aki9nlVxQ",difficulty:"Easy"},
    {artist: "Nirvana", song: "Stain", guitar: false, video: "https://www.youtube.com/watch?v=NGQw24ZKaz8",difficulty:"Easy"},
    {artist: "Nirvana", song: "Stay Away", guitar: false, video: "https://www.youtube.com/watch?v=1D8kcrSMmzc",difficulty:"Medium"},
    {artist: "Nirvana", song: "Territorial Pissings", guitar: true, video: "https://www.youtube.com/watch?v=nu3r8rYlIFU",difficulty:"Medium"},
    {artist: "Nirvana", song: "The Man Who Sold The World", guitar: true, video: "https://www.youtube.com/watch?v=r3uVsEdxuOg&list=LL&index=136",difficulty:"Medium"},
    {artist: "Nirvana", song: "Tourette's", guitar: false, video: "https://www.youtube.com/watch?v=zQ4He3H6GCQ",difficulty:"Hard"},
    {artist: "Nirvana", song: "Verse Chorus Verse", guitar: false, video: "https://www.youtube.com/watch?v=PFoUIUv_5wg",difficulty:"Medium"},
    {artist: "Nirvana", song: "You Know You're Right", guitar: false, video: "https://www.youtube.com/watch?v=S9v-1jFle1I",difficulty:"Medium"},
    {artist: "Nirvana", song: "Where Did You Sleep Last Night", guitar: true, video: "https://www.youtube.com/watch?v=q5Z6Ssm5wDg",difficulty:"Easy"},
    {artist:"Oasis",song:"Champagne Supernova", guitar:false, video:"https://www.youtube.com/watch?v=I3PpJCzgzz0&ab_channel=SparkyGuitar",difficulty:"Medium"},
    {artist: "Oasis", song: "Wonderwall", guitar: true, video: "https://www.youtube.com/watch?v=Y4yO-4HZpf8&list=LL&index=105",difficulty:"Medium"},
    {artist:"OneRepublic", song:"Counting Stars",guitar:false,video:"https://www.youtube.com/watch?v=YwwJI0JNPxg&ab_channel=MitchGissendaner",difficulty:"Medium"},
    {artist: "Ozzy Osbourne", song: "Crazy Train", guitar: false, video: "https://www.youtube.com/watch?v=G4M5V97CtA4",difficulty:"Hard"},
    {artist:"Ozzy Osbourne", song:"No More Tears",guitar:false,video:"https://www.youtube.com/watch?v=x6HEwH1riDI&ab_channel=Mr.Tabs",difficulty:"Hard"},
    {artist: "Pink Floyd", song: "Another Brick in the Wall", guitar: false, video: "https://www.youtube.com/watch?v=474vpIRt7vU",difficulty:"Medium"},
    {artist: "Pixies", song: "Where is my mind (1988)", guitar: true, video: "https://www.youtube.com/watch?v=ODzhCZ-5f3A",difficulty:"Easy"},
    {artist: "Queen", song: "Another One Bites the Dust", guitar: true, video: "https://www.youtube.com/watch?v=4FiAT79ANxk",difficulty:"Easy"},
    {artist: "Queen", song: "Bohemian Rhapsody", guitar: true, video: "https://www.youtube.com/watch?v=n1WomoCiYqg",difficulty:"Extreme"},
    {artist: "Queen", song: "Killer Queen", guitar: false, video: "https://www.youtube.com/watch?v=00YBEy8SS5U",difficulty:"Hard"},
    {artist: "Queen", song: "We Will Rock You", guitar: true, video: "https://www.youtube.com/watch?v=if9q6BpMd-o",difficulty:"Easy"},
    {artist: "Radiohead", song: "Creep", guitar: true, video: "https://www.youtube.com/watch?v=sdv_zBXZjvQ",difficulty:"Medium"},
    {artist: "Radiohead", song: "No Surprises", guitar: true, video: "https://www.youtube.com/watch?v=sdv_zBXZjvQ",difficulty:"Medium"},
    {artist: "Raffaella Carra", song: "Pedro", guitar: false, video:"https://www.youtube.com/watch?v=yk1EOa7jXe0&ab_channel=christianvib", difficulty:"Medium"},
    {artist: "Rage Against the Machine", song: "Killing in the Name", guitar: true, video: "https://www.youtube.com/watch?v=Fav-D1dJm5M",difficulty:"Medium"},
    {artist: "Rammstein", song: "Amerika", guitar: false, video: "https://www.youtube.com/watch?v=nKR7rbGWJps",difficulty:"Medium"},
    {artist: "Rammstein", song: "Du Hast", guitar: false, video: "https://www.youtube.com/watch?v=K_4_TyXcZcY",difficulty:"Medium"},
    {artist: "Rammstein", song: "Sonne", guitar: false, video: "https://www.youtube.com/watch?v=S_Naw3kq0C8",difficulty:"Medium"},
    {artist: "Ramones", song: "Blitzkrieg Bop", guitar: false, video: "https://www.youtube.com/watch?v=kQW34MNirTU",difficulty:"Easy"},
    {artist: "Red Hot Chili Peppers", song: "Californication", guitar: false, video: "https://www.youtube.com/watch?v=QeZnOpFfGxI",difficulty:"Medium"},
    {artist: "Red Hot Chili Peppers", song: "Can't Stop", guitar: true, video: "https://www.youtube.com/watch?v=GwJXI9xE7h8",difficulty:"Hard"},
    {artist: "Red Hot Chili Pepers", song: "Otherside", guitar: false, video:"https://www.youtube.com/watch?v=l96QD-MbbPU&ab_channel=RockFactory", difficulty:"Medium"},
    {artist: "Red Hot Chili Peppers", song: "Snow", guitar: false, video: "https://www.youtube.com/watch?v=JzRDZ69RHs0",difficulty:"Extreme"},
    {artist: "Redbone", song: "Childish Gambino", guitar: false, video: "https://www.youtube.com/watch?v=qtsoAW5Kk_w",difficulty:"Easy"},
    {artist: "Redbone", song: "Come and Get Your Love", guitar: false, video: "https://www.youtube.com/watch?v=3REAqdh7e-o",difficulty:"Easy"},
    {artist: "R.E.M.", song: "Losing My Religion", guitar: false, video: "https://www.youtube.com/watch?v=Hyv8-aO5kjA",difficulty:"Medium"},
    {artist: "Renaud", song: "Morgane de toi", guitar: false, video: "https://www.youtube.com/watch?v=Zy5QSYlbM-g",difficulty:"Easy"},
    {artist: "Richard Marx", song: "Right Here Waiting for You", guitar: true, video: "https://www.youtube.com/watch?v=VGmngcopdp8",difficulty:"Easy"},
    {artist:"Robin Schulz",song:"Player in C", guitar:false, video:"https://www.youtube.com/watch?v=1K7fK-fccW4&ab_channel=Alexguitar",difficulty:"Easy"},
    {artist: "Scorpions", song: "Always Somewhere", guitar: false, video: "https://www.youtube.com/watch?v=v2LlRb3jQ9w&list=LL&index=153",difficulty:"Easy"},
    {artist: "Scorpions", song: "Gypsy Life", guitar: false, video: "https://www.youtube.com/watch?v=nkbU1DnxDUo",difficulty:"Medium"},
    {artist: "Scorpions", song: "House of Cards", guitar: false, video: "https://www.youtube.com/watch?v=WUwIAxZ9oFg",difficulty:"Medium"},
    {artist: "Scorpions", song: "Send Me an Angel", guitar: false, video: "https://www.youtube.com/watch?v=fvWj63G7Yk0",difficulty:"Medium"},
    {artist: "Scorpions", song: "Still Loving You", guitar: true, video: "https://www.youtube.com/watch?v=KfMZ6QImHnM&list=LL&index=177",difficulty:"Hard"},
    {artist: "Scorpions", song: "Wind of Change", guitar: true, video: "https://www.youtube.com/watch?v=TM-v0624MXU&list=LL&index=70",difficulty:"Hard"},
    {artist: "Shaka Ponk", song: "I'm Picky", guitar: true, video: "https://www.youtube.com/watch?v=GnwWsiayT8o",difficulty:"Medium"},
    {artist:"Shawn Mendes", song:"There's Nothing Holdin' Me Back",guitar:false,video:"https://www.youtube.com/watch?v=jYo86UVYcjw&ab_channel=JoshuaCruz",difficulty:"Medium"},
    {artist: "Slash Featuring Myles Kennedy and The Conspirators", song: "Anastasia", guitar: false, video: "https://www.youtube.com/watch?v=8XmzOKBacuM",difficulty:"Extreme"},
    {artist:"SlipKnot",song:"Before I Forget", guitar:false, video:"https://www.youtube.com/watch?v=44fRYUp4qzw&ab_channel=DottiBrothers",difficulty:"Hard"},
    {artist: "Sound", song: "Sound of Elephant", guitar: true, video: "https://www.youtube.com/watch?v=sAi30S3M5bU",difficulty:"Hard"},
    {artist: "Survivor", song: "Eye of the Tiger", guitar: false, video: "https://www.youtube.com/watch?v=1x3FetxuQbk",difficulty:"Easy"},
    {artist:"Tame Impala",song:"The Less I Know The Better", guitar:false, video:"",difficulty:"Medium"},
    {artist: "TELEPHONE", song: "Ça (C'est vraiment toi)", guitar: true, video: "https://www.youtube.com/watch?v=ttvD4noVeKY&list=LL&index=130",difficulty:"Hard"},
    {artist: "TELEPHONE", song: "Un autre monde", guitar: false, video: "https://www.youtube.com/watch?v=4ghB1MQpv6c",difficulty:"Medium"},
    {artist: "The Animals", song: "House of the Rising Sun", guitar: true, video: "https://www.youtube.com/watch?v=OfafS6f9Q_Y",difficulty:"Medium"},
    {artist: "The Chainsmokers", song: "Don't Let Me Down", guitar: false, video: "https://warz.my.canva.site/dagj1gunwkq",difficulty:"Easy"},
    {artist: "The Clash", song: "Should I Stay or Should I Go", guitar: false, video: "https://www.youtube.com/watch?v=6BXoiTn31Us",difficulty:"Medium"},
    {artist: "The Connells", song: "74-'75", guitar: false, video: "https://www.youtube.com/watch?v=ObogUA8pxTQ",difficulty:"Easy"},
    {artist: "The Cranberries", song: "Zombie", guitar: true, video: "https://www.youtube.com/watch?v=lOsVMq8Zm5w&list=LL&index=87",difficulty:"Medium"},
    {artist:"Theme Song",song:"Fortnite", guitar:false, video:"https://www.youtube.com/watch?v=qnHeuapkzac&ab_channel=YouTab",difficulty:"Easy"},
    {artist: "Theme Song", song: "Mario", guitar: false, video: "https://www.youtube.com/watch?v=8Z6WA3rXEq0",difficulty:"Easy"},
    {artist: "THE OFFSPRING", song: "Come Out and Play", guitar: true, video: "https://www.youtube.com/watch?v=2jnF2OOxS2g",difficulty:"Medium"},
    {artist:"The OFFSPRING",song:"Gone Away", guitar:false, video:"https://www.youtube.com/watch?v=trpMZfgBPSE&ab_channel=DottiBrothers",difficulty:"Medium"},
    {artist: "THE OFFSPRING", song: "The Kids Aren't Alright", guitar: false, video: "https://www.youtube.com/watch?v=PcBt2p4Qi0w&list=LL&index=111",difficulty:"Hard"},
    {artist: "The Police", song: "Every Breath You Take", guitar: false, video:"https://www.youtube.com/watch?v=JvRLYuiyURk&ab_channel=GuitarZero2HeroExpress", difficulty:"Medium"},
    {artist: "The Rolling Stones", song: "(I Can't Get No) Satisfaction", guitar: false, video:"https://www.youtube.com/watch?v=6kxDsfdmDB0&ab_channel=DeGaspari%27sGuitarLessons", difficulty:"Medium"},
    {artist: "The White Stripes", song: "Seven Nation Army", guitar: true, video: "https://www.youtube.com/watch?v=37DoRnRBvoQ",difficulty:"Medium"},
    {artist: "Twenty One Pilots", song: "Stressed Out", guitar: false, video: "https://www.youtube.com/watch?v=e85fH7paS-o",difficulty:"Easy"},
    {artist: "U2", song: "Sunday Bloody Sunday", guitar: true, video: "https://www.youtube.com/watch?v=-9LZdCchgdc",difficulty:"Medium"},
    {artist: "Vanessa Paradis & -M-", song: "La Seine", guitar: true, video: "https://www.youtube.com/watch?v=PsD45ErjTlU",difficulty:"Easy"},
    {artist: "Van Halen", song: "Eruption", guitar: true, video: "https://www.youtube.com/watch?v=GTvcyYUWV2M",difficulty:"Hard"},
    {artist:"Weezer", song:"The Sweater Song ",guitar:false,video:"https://www.youtube.com/watch?v=-lYZ1sqtD-Q&ab_channel=Egor5287",difficulty:"Medium"},
    {artist: "Wham!", song: "Last Christmas", guitar: true, video: "https://yjrthn.my.canva.site/dagjuzh-bcc",difficulty:"Easy"},
    {artist: "Yeat", song: "Monëy so Big", guitar: false, video: "https://www.youtube.com/watch?v=OV0bYV5BUsM", difficulty:"Medium"},  
    {artist: "", song: "", guitar: false, video:"", difficulty:""},
    ];



document.getElementById('sortCriteria').addEventListener('change', function() {
            const criteria = this.value;
            renderTaskList(songs, criteria);
        });

        // Initial render
        renderTaskList(songs, 'artist');

        function renderTaskList(songs, criteria) {
            const sortedSongs = [...songs].sort((a, b) => {
                if (a[criteria] < b[criteria]) return -1;
                if (a[criteria] > b[criteria]) return 1;
                return 0;
            });

            const tableBody = document.querySelector('#songsTable tbody');
            tableBody.innerHTML = '';
            sortedSongs.forEach(song => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${song.artist}</td>
                    <td>${song.song}</td>
                    <td>${song.guitar ? '✓' : ''}</td>
                    <td>${song.video ? `<a href="${song.video}" target="_blank">vidéo</a>` : ''}</td>
                    <td>${song.difficulty}</td>`;
                    
                tableBody.appendChild(row);
            });
        }

        function filterDifficulty() {
            const difficultyOrder = {
                'Easy': 1,
                'Medium': 2,
                'Hard': 3,
                'Extreme': 4
            };
        
            const sortedSongs = [...songs].sort((a, b) => {
                return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
            });
        
            renderTaskList(sortedSongs, 'artist'); // Vous pouvez ajuster le critère de tri si nécessaire
        }
        function filterGuitar() {
            const filteredData = songs.filter(song => song.guitar);
            renderTaskList(filteredData, 'artist'); // Vous pouvez ajuster le critère de tri si nécessaire
        }

        function filterNoGuitar() {
            const filteredData = songs.filter(song => !song.guitar);
            renderTaskList(filteredData, 'artist'); // Vous pouvez ajuster le critère de tri si nécessaire
        }

        let difficultyOrder = 'asc'; // Initial order is ascending

        document.getElementById('sortCriteria').addEventListener('change', function() {
            const criteria = this.value;
            renderTaskList(songs, criteria);
        });

        // Initial render
        renderTaskList(songs, 'artist');

        function renderTaskList(songs, criteria) {
            const sortedSongs = [...songs].sort((a, b) => {
                if (criteria === 'difficulty' && difficultyOrder === 'desc') {
                    if (a[criteria] < b[criteria]) return 1;
                    if (a[criteria] > b[criteria]) return -1;
                    return 0;
                } else {
                    if (a[criteria] < b[criteria]) return -1;
                    if (a[criteria] > b[criteria]) return 1;
                    return 0;
                }
            });

            const tableBody = document.querySelector('#songsTable tbody');
            tableBody.innerHTML = '';
            sortedSongs.forEach(song => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${song.artist}</td>
                    <td>${song.song}</td>
                    <td>${song.guitar ? '✓' : ''}</td>
                    <td>${song.video ? `<a href="${song.video}" target="_blank">vidéo</a>` : ''}</td>
                    <td>${song.difficulty}</td>`;
                tableBody.appendChild(row);
            });
        }

        function filterDifficulty() {
            const difficultyOrder = {
                'Easy': 1,
                'Medium': 2,
                'Hard': 3,
                'Extreme': 4
            };

            const sortedSongs = [...songs].sort((a, b) => {
                return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
            });

            renderTaskList(sortedSongs, 'artist'); // Vous pouvez ajuster le critère de tri si nécessaire
        }

        function filterGuitar() {
            const filteredData = songs.filter(song => song.guitar);
            renderTaskList(filteredData, 'artist'); // Vous pouvez ajuster le critère de tri si nécessaire
        }

        function filterNoGuitar() {
            const filteredData = songs.filter(song => !song.guitar);
            renderTaskList(filteredData, 'artist'); // Vous pouvez ajuster le critère de tri si nécessaire
        }

        function toggleDifficultyOrder() {
            difficultyOrder = difficultyOrder === 'asc' ? 'desc' : 'asc';
            renderTaskList(songs, 'difficulty');
        }

        const difficultyLevels = ['Easy', 'Medium', 'Hard', 'Extreme'];

        function renderTaskList(songs, criteria) {
    const sortedSongs = [...songs].sort((a, b) => {
        if (criteria === 'difficulty') {
            const aIndex = difficultyLevels.indexOf(a.difficulty);
            const bIndex = difficultyLevels.indexOf(b.difficulty);
            return difficultyOrder === 'asc' ? aIndex - bIndex : bIndex - aIndex;
        } else {
            if (a[criteria] < b[criteria]) return -1;
            if (a[criteria] > b[criteria]) return 1;
            return 0;
        }
    });

    const tableBody = document.querySelector('tbody'); // Assuming your table has a <tbody>
    tableBody.innerHTML = '';

    sortedSongs.forEach(song => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${song.artist}</td>
            <td>${song.song}</td>
            <td>${song.guitar ? '✓' : ''}</td>
            <td>${song.video ? `<a href="${song.video}" target="_blank">vidéo</a>` : ''}</td>
            <td>${song.difficulty}</td>`;
        tableBody.appendChild(row);
    });
}
