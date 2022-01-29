import React from "react"
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography
} from "@material-ui/core"
import { useHomeStyles } from "../../pages/home/theme"
import { useSelector } from "react-redux"
import { selectIsTagsLoaded, selectTagsItems } from "../../store/ducks/tags/selectors"
import { Link } from "react-router-dom"

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {
  const items = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded)

  if (!isLoaded) return null

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSIdeBlockHeader} variant="outlined">
        <b>Actual thems</b>
      </Paper>
      <List>
        {items?.map((item) => (
          <React.Fragment key={item._id}>
            <ListItem className={classes.rightSideBlockItem}>
              <Link to={`/home/search?q=${item.name}`}>
                <ListItemText
                  primary={item.name}
                  secondary={
                    <Typography component="span" variant="body2">
                      Twits: {item.count}
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
          <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Paper>
  )
}