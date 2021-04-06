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

user1_collection = [paak1, paak2, paak3, paak4, lahavas1, lahavas2, lahavas3, lahavas4, pinegrove1, pinegrove2, pinegrove3, pinegrove4]

user2_collection = [misch1, misch2, misch3, misch4]

all_videos = [paak1, paak2, paak3, paak4, lahavas1, lahavas2, lahavas3, lahavas4, pinegrove1, pinegrove2, pinegrove3, pinegrove4, misch1, misch2, misch3, misch4]

    
    

    