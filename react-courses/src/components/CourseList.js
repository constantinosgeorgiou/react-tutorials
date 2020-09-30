import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";

import Course from "../components/Course";

const SPACE_ID = "g4vd74hxxceu";
const ACCESS_TOKEN = "UYf0FynPB-2TeUvvlBAbv327spRa8IRQiHyg2RCKXVk";

const client = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
});

class CoursesList extends Component {
    state = {
        courses: [],
        searchString: "",
    };

    constructor() {
        super();
        this.getCourses();
    }

    getCourses = () => {
        client
            .getEntries({
                content_type: "courses",
                query: this.state.searchString,
            })
            .then((response) => {
                this.setState({ courses: response.items });
                console.log(this.state.courses);
            })
            .catch((error) => {
                console.log("Error occurred while fetching Entries");
                console.log(error);
            });
    };

    onSearchInputChange = (event) => {
        console.log("Search changed ..." + event.target.value);
        if (event.target.value) {
            this.setState({ searchString: event.target.value });
        } else {
            this.setState({ searchString: "" });
        }
        this.getCourses();
    };

    render() {
        return (
            <div>
                {this.state.courses ? (
                    <div>
                        <TextField
                            style={{ padding: 24 }}
                            id="searchInput"
                            placeholder="Search for Courses"
                            margin="normal"
                            onChange={this.onSearchInputChange}
                        />
                        <Grid container spacing={24} style={{ padding: 24 }}>
                            {this.state.courses.map((currentCourse) => (
                                <Grid item xs={12} sm={6} lg={4} xl={3}>
                                    <Course course={currentCourse} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                ) : (
                    "No courses found"
                )}
            </div>
        );
    }
}

export default CoursesList;
