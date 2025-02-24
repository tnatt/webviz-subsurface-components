import { Button, Icon, Tooltip } from "@equinor/eds-core-react";
import { view_column } from "@equinor/eds-icons";
import {
    Box,
    createStyles,
    makeStyles,
    Menu,
    // eslint-disable-next-line prettier/prettier
    Theme
} from "@material-ui/core";
import React from "react";
import RangeDisplayModeSelector from "./RangeDisplayModeSelector";
import SortButton from "./SortButton";
import WellsPerPageSelector from "./WellsPerPageSelector";

Icon.add({ view_column }); // (this needs only be done once)
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            alignSelf: "center",
            width: "200px",
        },
    })
);
const ViewMenu: React.FC = React.memo(() => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    // handlers
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Tooltip title="View">
                <Button variant="ghost_icon" onClick={handleClick}>
                    <Icon color="currentColor" name="view_column" />
                </Button>
            </Tooltip>
            <Menu
                id="view-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                classes={{ paper: classes.paper }}
            >
                <Box marginY={1}>
                    <SortButton />
                    <RangeDisplayModeSelector />
                    <WellsPerPageSelector />
                </Box>
            </Menu>
        </div>
    );
});

ViewMenu.displayName = "ViewMenu";
export default ViewMenu;
