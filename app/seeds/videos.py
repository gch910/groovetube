from app.models import db, Video

#(?<=images\/)(\w+)(?=")
#$1.jpg
  
paak1 = Video(
    title="Anderson .Paak & The Free Nationals: NPR Music Tiny Desk Concert",
    artist="Anderson .Paak",
    video_path="//www.youtube.com/embed/ferZnZ0_rSM",
    img_path="/images/paak1.jpg",
    gif_path="/gifs/paak1.gif",
    user_id=1,
    category_id=1
    )

paak2 = Video(
    title="Bruno Mars, Anderson .Paak, Silk Sonic - Leave the Door Open [Official Video]",
    artist="Anderson .Paak",
    video_path="//www.youtube.com/embed/adLGHcj_fmA",
    img_path="/images/paak2.jpg",
    gif_path="/gifs/paak2.gif",
    user_id=1,
    category_id=1
    )

paak3 = Video(
    title="Anderson .Paak & the Free Nationals Live Concert | GRAMMY Pro Music",
    artist="Anderson .Paak",
    video_path="//www.youtube.com/embed/-wVraXhkjMI",
    img_path="/images/paak3.jpg",
    gif_path="/gifs/paak3.gif",
    user_id=1,
    category_id=1
    )
paak4 = Video(
    title="Anderson Paak - Full Performance - Live on KCRW, 2016",
    artist="Anderson .Paak",
    video_path="//www.youtube.com/embed/29m54KcvMEQ",
    img_path="/images/paak4.jpg",
    gif_path="/gifs/paak4.gif",
    user_id=1,
    category_id=1
    )
lahavas1 = Video(
    title="Lianne LaHavas: NPR Music Tiny Desk Concert",
    artist="Lianne LaHavas",
    video_path="//www.youtube.com/embed/9HUV5a7MgS4",
    img_path="/images/lahavas1.jpg",
    gif_path="/gifs/lahavas1.gif",
    user_id=1,
    category_id=3
    )
lahavas2 = Video(
    title="Lianne La Havas – Live at Focus Music Festival 2020",
    artist="Lianne LaHavas",
    video_path="//www.youtube.com/embed/tLzdKJeFT7Q",
    img_path="/images/lahavas2.jpg",
    gif_path="/gifs/lahavas2.gif",
    user_id=1,
    category_id=3
    )
lahavas3 = Video(
    title="Lianne La Havas (Live at Afropunk 2014) [FULL SET]",
    artist="Lianne LaHavas",
    video_path="//www.youtube.com/embed/tLzdKJeFT7Q",
    img_path="/images/lahavas3.jpg",
    gif_path="/gifs/lahavas3.gif",
    user_id=1,
    category_id=3
    )
lahavas4 = Video(
    title="Lianne La Havas - Bittersweet - Late Show #PlayAtHome",
    artist="Lianne LaHavas",
    video_path="//www.youtube.com/embed/ak9oOapxDBA",
    img_path="/images/lahavas4.jpg",
    gif_path="/gifs/lahavas4.gif",
    user_id=1,
    category_id=3
    )

pinegrove1 = Video(
    title="Pinegrove: NPR Music Tiny Desk Concert",
    artist="Pinegrove",
    video_path="//www.youtube.com/embed/weL8HTY1NJU",
    img_path="/images/pinegrove1.jpg",
    gif_path="/gifs/pinegrove1.gif",
    user_id=1,
    category_id=2
    )

pinegrove2 = Video(
    title="Pinegrove on Audiotree Live (Full Session)",
    artist="Pinegrove",
    video_path="//www.youtube.com/embed/0JvG551iDTE",
    img_path="/images/pinegrove2.jpg",
    gif_path="/gifs/pinegrove2.gif",
    user_id=1,
    category_id=5
    )
pinegrove3 = Video(
    title="Pinegrove - Amperland, NY - The Movie",
    artist="Pinegrove",
    video_path="//www.youtube.com/embed/wdvCd88vjw8",
    img_path="/images/pinegrove3.jpg",
    gif_path="/gifs/pinegrove3.gif",
    user_id=1,
    category_id=5
    )
pinegrove4 = Video(
    title='Pinegrove - "Darkness" & "Skylight" (Pallet Session)',
    artist="Pinegrove",
    video_path="//www.youtube.com/embed/sIPXjhZB2Z8",
    img_path="/images/pinegrove4.jpg",
    gif_path="/gifs/pinegrove4.gif",
    user_id=1,
    category_id=5
    )

misch1 = Video(
    title='Tom Misch: NPR Music Tiny Desk Concert',
    artist="Tom Misch",
    video_path="//www.youtube.com/embed/IUMTaAQ43lY",
    img_path="/images/misch1.jpg",
    gif_path="/gifs/misch1.gif",
    user_id=2,
    category_id=8
)
misch2 = Video(
    title='Tom Misch Live at Montreux Jazz Festival 2019',
    artist="Tom Misch",
    video_path="//www.youtube.com/embed/X_1cgHy4M7E",
    img_path="/images/misch2.jpg",
    gif_path="/gifs/misch2.gif",
    user_id=2,
    category_id=8
)
misch3 = Video(
    title='Tom Misch | Live at Melt Festival 2017',
    artist="Tom Misch",
    video_path="//www.youtube.com/embed/kedJiv-RTtc",
    img_path="/images/misch3.jpg",
    gif_path="/gifs/misch3.gif",
    user_id=2,
    category_id=8
)
misch4 = Video(
    title='Soulection Radio Sessions: Tom Misch',
    artist="Tom Misch",
    video_path="//www.youtube.com/embed/aAFbvMUD5SU",
    img_path="/images/misch4.jpg",
    gif_path="/gifs/misch4.gif",
    user_id=2,
    category_id=8
)
stone1 = Video(
    title='Allen Stone - Somebody That I Used To Know (Gotye Cover - Live at Bear Creek Studio)',
    artist="Allen Stone",
    video_path="//www.youtube.com/embed/wE46huUs20E",
    img_path="/images/stone1.jpg",
    gif_path="/gifs/stone1.gif",
    user_id=2,
    category_id=7
)
stone2 = Video(
    title='Allen Stone - Full Performance (Live on KEXP)',
    artist="Allen Stone",
    video_path="//www.youtube.com/embed/gDlmpBiSSt4",
    img_path="/images/stone2.jpg",
    gif_path="/gifs/stone2.gif",
    user_id=2,
    category_id=7
)
stone3 = Video(
    title='Allen Stone - Give You Blue (Official Live Video)',
    artist="Allen Stone",
    video_path="//www.youtube.com/embed/yUlnjRui7Mw",
    img_path="/images/stone3.jpg",
    gif_path="/gifs/stone3.gif",
    user_id=2,
    category_id=8
)
stone4 = Video(
    title='Allen Stone - "The Bed I Made" Taylor Sessions',
    artist="Allen Stone",
    video_path="//www.youtube.com/embed/Ub7IcarC4TU",
    img_path="/images/stone4.jpg",
    gif_path="/gifs/stone4.gif",
    user_id=2,
    category_id=8
)
noname1 = Video(
    title='Noname Boiler Room x Budweiser Cape Town Live Set',
    artist="Noname",
    video_path="//www.youtube.com/embed/H5y2bDBr02Q",
    img_path="/images/noname1.jpg",
    gif_path="/gifs/noname1.gif",
    user_id=2,
    category_id=1
)
noname2 = Video(
    title='Noname: Tiny Desk Concert',
    artist="Noname",
    video_path="//www.youtube.com/embed/K58JYXhb4YA",
    img_path="/images/noname2.jpg",
    gif_path="/gifs/noname2.gif",
    user_id=2,
    category_id=1
)
noname3 = Video(
    title="Noname Performs A Three-Song Medley From Her Album 'Room 25'",
    artist="Noname",
    video_path="//www.youtube.com/embed/otGhpa8tcoA",
    img_path="/images/noname3.jpg",
    gif_path="/gifs/noname3.gif",
    user_id=2,
    category_id=1
)
noname4 = Video(
    title="Noname LIVE @ Le Chiffre, London [UK Debut Performance]",
    artist="Noname",
    video_path="//www.youtube.com/embed/MC2bJU4WwFY",
    img_path="/images/noname4.jpg",
    gif_path="/gifs/noname4.gif",
    user_id=2,
    category_id=1
)
haywyre1 = Video(
    title="Haywyre - Insight (Live Performance) [Monstercat Release]",
    artist="Haywyre",
    video_path="//www.youtube.com/embed/UGeNoml0OHc",
    img_path="/images/haywyre1.jpg",
    gif_path="/gifs/haywyre1.gif",
    user_id=3,
    category_id=6
)
haywyre2 = Video(
    title="Haywyre - Let Me Hear That",
    artist="Haywyre",
    video_path="//www.youtube.com/embed/21d1CdIqnj0",
    img_path="/images/haywyre2.jpg",
    gif_path="/gifs/haywyre2.gif",
    user_id=3,
    category_id=6
)
haywyre3 = Video(
    title="Haywyre - Never Count On Me",
    artist="Haywyre",
    video_path="//www.youtube.com/embed/0pNWOjQfGxU",
    img_path="/images/haywyre3.jpg",
    gif_path="/gifs/haywyre3.gif",
    user_id=3,
    category_id=6
)
haywyre4 = Video(
    title="Haywyre - Square One",
    artist="Haywyre",
    video_path="//www.youtube.com/embed/_C_4H--xjSI",
    img_path="/images/haywyre4.jpg",
    gif_path="/gifs/haywyre4.gif",
    user_id=3,
    category_id=6
)
hozier1 = Video(
    title="Hozier - Movement (Live at The Current)",
    artist="Hozier",
    video_path="//www.youtube.com/embed/Nc7tV0lRfYY",
    img_path="/images/hozier1.jpg",
    gif_path="/gifs/hozier1.gif",
    user_id=3,
    category_id=4
)
hozier2 = Video(
    title="Hozier: NPR Music Tiny Desk Concert",
    artist="Hozier",
    video_path="//www.youtube.com/embed/oLgZo6Qi3Uo",
    img_path="/images/hozier2.jpg",
    gif_path="/gifs/hozier2.gif",
    user_id=3,
    category_id=4
)
hozier3 = Video(
    title="Hozier - Cherry Wine (Unplugged) | Mahogany Session",
    artist="Hozier",
    video_path="//www.youtube.com/embed/EtRIz7VocNs",
    img_path="/images/hozier3.jpg",
    gif_path="/gifs/hozier3.gif",
    user_id=3,
    category_id=4
)
hozier4 = Video(
    title="Hozier - Nina Cried Power (feat. Mavis Staples) - Live At Windmill Lane Studios",
    artist="Hozier",
    video_path="//www.youtube.com/embed/OBKPI5t9xI8",
    img_path="/images/hozier4.jpg",
    gif_path="/gifs/hozier4.gif",
    user_id=3,
    category_id=4
)
dive1 = Video(
    title="Lake Street Dive: NPR Music Tiny Desk",
    artist="Lake Street Dive",
    video_path="//www.youtube.com/embed/gdRAcoD5Gt0",
    img_path="/images/dive1.jpg",
    gif_path="/gifs/dive1.gif",
    user_id=3,
    category_id=5
)
dive2 = Video(
    title='Lake Street Dive Plays "I Want You Back" On a Boston Sidewalk',
    artist="Lake Street Dive",
    video_path="//www.youtube.com/embed/6EPwRdVg5Ug",
    img_path="/images/dive2.jpg",
    gif_path="/gifs/dive2.gif",
    user_id=3,
    category_id=5
)
dive3 = Video(
    title='Lake Street Dive - Full Performance (Live on KEXP)',
    artist="Lake Street Dive",
    video_path="//www.youtube.com/embed/crqkkXCGMyk",
    img_path="/images/dive3.jpg",
    gif_path="/gifs/dive3.gif",
    user_id=3,
    category_id=5
)
dive4 = Video(
    title='Lake Street Dive - 3 Song Set (Recorded Live for World Cafe)',
    artist="Lake Street Dive",
    video_path="//www.youtube.com/embed/gl3vmRwXm0s",
    img_path="/images/dive4.jpg",
    gif_path="/gifs/dive4.gif",
    user_id=3,
    category_id=5
)
bridges1 = Video(
    title='Leon Bridges: NPR Music Tiny Desk Concert',
    artist="Leon Bridges",
    video_path="//www.youtube.com/embed/C_oACPWGvM4",
    img_path="/images/bridges1.jpg",
    gif_path="/gifs/bridges1.gif",
    user_id=3,
    category_id=3
)
bridges2 = Video(
    title='Leon Bridges - Mrs. (Live From Nashville)',
    artist="Leon Bridges",
    video_path="//www.youtube.com/embed/01o83og1bf4",
    img_path="/images/bridges2.jpg",
    gif_path="/gifs/bridges2.gif",
    user_id=3,
    category_id=3
)
bridges3 = Video(
    title='Leon Bridges Lollapalooza, Grant Park, Chicago',
    artist="Leon Bridges",
    video_path="//www.youtube.com/embed/7mYVPg2ablA",
    img_path="/images/bridges3.jpg",
    gif_path="/gifs/bridges3.gif",
    user_id=3,
    category_id=3
)
bridges4 = Video(
    title='Leon Bridges - Sweeter (Live At Gold Diggers) ft. Terrace Martin',
    artist="Leon Bridges",
    video_path="//www.youtube.com/embed/ViQuEDyxKCA",
    img_path="/images/bridges4.jpg",
    gif_path="/gifs/bridges4.gif",
    user_id=3,
    category_id=3
)
haim1 = Video(
    title='HAIM - Gasoline (Jimmy Kimmel Live!)',
    artist="HAIM",
    video_path="//www.youtube.com/embed/NCWSSTQb3qw",
    img_path="/images/haim1.jpg",
    gif_path="/gifs/haim1.gif",
    user_id=1,
    category_id=2
)
haim2 = Video(
    title='HAIM - Want You Back (Live from The Tonight Show Starring Jimmy Fallon)',
    artist="HAIM",
    video_path="//www.youtube.com/embed/FkLaawsuAzk",
    img_path="/images/haim2.jpg",
    gif_path="/gifs/haim2.gif",
    user_id=1,
    category_id=2
)
haim3 = Video(
    title='Haim: Tiny Desk (Home) Concert',
    artist="HAIM",
    video_path="//www.youtube.com/embed/Svv3IX8exP8",
    img_path="/images/haim3.jpg",
    gif_path="/gifs/haim3.gif",
    user_id=1,
    category_id=2
)
haim4 = Video(
    title='HAIM - 3AM (Late Night with Seth Meyers)',
    artist="HAIM",
    video_path="//www.youtube.com/embed/FoC-l5-y8Eo",
    img_path="/images/haim4.jpg",
    gif_path="/gifs/haim4.gif",
    user_id=1,
    category_id=2
)

user1_collection = [paak1, paak2, paak3, paak4, haim1, haim2, haim3, haim4, lahavas1, lahavas2, lahavas3, lahavas4, pinegrove1, pinegrove2, pinegrove3, pinegrove4]

user2_collection = [misch1, misch2, misch3, misch4, stone1, stone2, stone3, stone4, noname1, noname2, noname3, noname4]

user3_collection = [haywyre1, haywyre2, haywyre3, haywyre4, bridges1, bridges2, bridges3, bridges4, hozier1, hozier2, hozier3, hozier4, dive1, dive2, dive3, dive4]

all_videos = [paak1, paak2, paak3, paak4, lahavas1, lahavas2, lahavas3, lahavas4, pinegrove1, pinegrove2, pinegrove3, pinegrove4, misch1, misch2, misch3, misch4, stone1, stone2, stone3, stone4, noname1, noname2, noname3, noname4, haywyre1, haywyre2, haywyre3, haywyre4, hozier1, hozier2, hozier3, hozier4, dive1, dive2, dive3, dive4, bridges1, bridges2, bridges3, bridges4, haim1, haim2, haim3, haim4]

    
    

    