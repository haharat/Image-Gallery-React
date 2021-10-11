import React, { useState } from "react";

import {
    Typography,
    Divider,
    TextField,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Chip,
    Grid,
    Select,
    MenuItem,
    Box,
    Stack
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DownloadIcon from '@mui/icons-material/Download';
import CommentIcon from '@mui/icons-material/Comment';
import axios from "axios";
import Popup from "./Popup"

const API_KEY = "23703985-651ecb5474639e0c38ea88125";

const ImageDisplay = () => {
    const [searchKey, setSearchKey] = useState("")
    const [imageList, setImageList] = useState([])
    const [amount, setAmount] = useState("10")
    const [open, setOpen] = useState(false);
    const [imageSelected, setImageSelected] = useState("")

    const handleClickOpen = (imageURL) => {
        setImageSelected(imageURL);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (e) => {
        e.preventDefault();
        //console.log(e.target.value)
        setSearchKey(e.target.value)
        axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${searchKey}&image_type=photo`)
            .then((response) => {
                console.log(response.data.hits)
                setImageList(response.data.hits.slice(0, parseInt(amount)))
                // console.log(parseInt(amount))
                // console.log(imageList.slice(0, parseInt(amount)))
            })
            .catch((error) => console.log(error))

        console.log(imageList)
    }

    const handleSelect = (e) => {
        setAmount(e.target.value);
        console.log(amount)
    };

    return (
        <Box m={2}>
            <Grid container spacing={1} m={2}>
                <Grid item xs={8}>
                    <TextField
                        label="Enter key word..."
                        variant="outlined"
                        value={searchKey}
                        onChange={handleChange}
                        fullWidth />
                </Grid>
                <Grid item xs={4}>
                    <Select
                        value={amount}
                        label="Amount"
                        onChange={handleSelect}
                        fullWidth
                    >
                        <MenuItem selected>Amount</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </Grid>
            </Grid>

            <Grid container rowSpacing={2}>
                {imageList && imageList.map((image) => (
                    <Grid item xs={12} md={4}>
                        <Card sx={{ maxWidth: 345 }}  >
                            <CardActionArea onClick={() => handleClickOpen(image.largeImageURL)}>
                                <CardMedia
                                    component="img"
                                    height="240"
                                    image={image.webformatURL}
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography variant="h6" style={{ color: "#00adb5" }}>
                                    Photo By {image.user}
                                </Typography>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemIcon>
                                            <VisibilityIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            secondary={<>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="subtitle1"
                                                    color="text.primary"
                                                >
                                                    Views:
                                                </Typography>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="small"
                                                    variant="body2"
                                                >
                                                    {image.views}
                                                </Typography>
                                            </>}
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem alignItems="flex-start">
                                        <ListItemIcon>
                                            <DownloadIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            secondary={<>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="subtitle1"
                                                    color="text.primary"
                                                >
                                                    Downloads:
                                                </Typography>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="small"
                                                    variant="body2"
                                                >
                                                    {image.downloads}
                                                </Typography>
                                            </>}
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem alignItems="flex-start">
                                        <ListItemIcon>
                                            <ThumbUpIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            secondary={<>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="subtitle1"
                                                    color="text.primary"
                                                >
                                                    Likes:
                                                </Typography>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="small"
                                                    variant="body2"
                                                >
                                                    {image.likes}
                                                </Typography>
                                            </>}
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem alignItems="flex-start">
                                        <ListItemIcon>
                                            <CommentIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            secondary={<>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="span"
                                                    variant="subtitle1"
                                                    color="text.primary"
                                                >
                                                    Comments:
                                                </Typography>
                                                <Typography
                                                    sx={{ display: "inline" }}
                                                    component="small"
                                                    variant="body2"
                                                >
                                                    {image.comments}
                                                </Typography>
                                            </>}
                                        />
                                    </ListItem>
                                    <Divider />
                                </List>
                                <Stack direction="row" spacing={1}>
                                    {(image.tags).split(", ").map((tag) =>
                                        <Chip label={`# ${tag}`} />
                                    )}
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Popup buttonName="Close" open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} imageSelected={imageSelected} />
            {/* this is the way of passing attributes from ImageDisplay(parent) down to Popop(child) component */}
        </Box>
    )
}

export default ImageDisplay