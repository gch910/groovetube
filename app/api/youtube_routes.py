from flask import Blueprint, jsonify, request

import requests, os

youtube_routes = Blueprint("youtube", __name__)

# from googleapiclient.discovery import build

#youtube api test
# api_key = 'AIzaSyB-cg2PILg2f5Yu9DU8XL1YypjJNqsZ5Bc'

# youtube = build('youtube', 'v3', developerkey=api_key)

@youtube_routes.route('/')
def search():

    search_url = 'https://www.googleapis.com/youtube/v3/search'
    videos_url = 'https://www.googleapis.com/youtube/v3/videos'

    search_params  = {
        'key': os.environ.get('YOUTUBE_API_KEY'),
        'q': 'anderson paak',
        'part': 'snippet',
        'maxResults': 10, 
        'type': 'video'
    }

    r = requests.get(search_url, params=search_params)

    search_videos = r.json()["items"]
    search_video_ids = [video['id']['videoId'] for video in search_videos]

    video_params = {
        'key': os.environ.get('YOUTUBE_API_KEY'),
        'id': search_video_ids,
        'part': 'snippet',
        'maxResults': 10
    }

    r2 = requests.get(videos_url, params=video_params)

    videos = r2.json()["items"]
    
    video_data = [{'id': video['id'],'url': 'https://www.youtube.com/watch?v=' + str(video['id']),'thumbnail': video['snippet']['thumbnails']['high']['url'],'title': video['snippet']['title']} for video in videos]
    # 
    return jsonify(video_data)

@youtube_routes.route('/search')
def video_categories():
    search_url = 'https://www.googleapis.com/youtube/v3/search'
    video_url = 'https://www.googleapis.com/youtube/v3/videos'

    search_params  = {
        'key': os.environ.get('YOUTUBE_API_KEY'),
        'part': 'snippet',
        'q': 'anderson paak',
        'maxResults': 10, 
    }

    r = requests.get(search_url, params=search_params)

    search_videos = r.json()['items']
    search_video_ids = [video['id'] for video in search_videos]


    video_params = {
        'key': os.environ.get('YOUTUBE_API_KEY'),
        'part': 'snippet,topicDetails,player',
        'id': "adLGHcj_fmA",
        'maxResults': 10
    }

    r2 = requests.get(video_url, params=video_params)
    #this gets the iframe back! can use this in to render videos
    videos = r2.json()['items'][0]['player']
    
    # video_data = [{ 'id': video['id']['videoId'],'url': 'https://www.youtube.com/watch?v=' + str(video['id']['videoId']),'thumbnail': video['snippet']['thumbnails']['high']['url'],'title': video['snippet']['title']} for video in videos]
    
    return jsonify(videos)

    #  {
    #   "etag": "wvpxxbAC8BGLGWjuIRoO8ekkWhY", 
    #   "id": "US", 
    #   "kind": "youtube#i18nRegion", 
    #   "snippet": {
    #     "gl": "US", 
    #     "name": "United States"
    #   }

    # channel id npr "channelId": "UC4eYXhJI4-7wSWc8UNRwD4A", 
    #video id = "ferZnZ0_rSM"



