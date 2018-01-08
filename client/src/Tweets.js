import React from 'react';
import { List, Image } from 'semantic-ui-react'

const Tweets = ({ tweets }) => {
  return(
    <List divided relaxed>
      { tweets.map(tweet =>
          <List.Item key={tweet.id}>

          </List.Item>
        )
      }
    </List>
  )
}
