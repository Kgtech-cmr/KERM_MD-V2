from azapi import AZlyrics

# Names should be passed corrrectly
# If you can't remember, use google or duckduckgo
# AZlyrics('google')
api = AZlyrics()

api.artist = "Taylor Swift"
api.title = "Blank Space"

api.getLyrics(save=True)
