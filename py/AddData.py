from recombee_api_client.api_client import RecombeeClient, Region
from recombee_api_client.api_requests import *
import json 


with open('D.json') as f:
    data = json.load(f)



client = RecombeeClient(
  'exodia-the-forbidden-one-dev', 
  'bx6IIFrZ7tzVnBplVVGhaQCdUKLVHWcELOMsUWH1orFxefDJtPuOzIFGT8Ck7Gdn', 
  region=Region.AP_SE
)

requests = [SetItemValues(
    i['id']  , #itemId
    #values:
    {
      'imageUrl': i['imageUrl'],
      'ProductName':i['ProductName'] ,
      'Detail': i['Detail'] ,
      'Description': i['Description'],
      'Tag' : i['Tag']
    },
    cascade_create=True   # Use cascadeCreate for creating item
                         # with given itemId if it doesn't exist
  ) for i in data]

client.send(Batch(requests))


