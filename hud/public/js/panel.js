var io = io('http://' + ip + ':' + port + '/');

function loadMatch(data) {
    loadTeams((teams) => {
        $teamList = $("#team_1, #team_2");
        $teamList.html("<option value=null>NONE</option><option value='auto' selected>Try to match team automatically</option>");

        teams.forEach(function(team, id) {
            let $option = $("<option value='" + team._id + "'>" + team.team_name + "</option>");
            if (team.logo) {
                $option.attr("data-icon", "/teams/" + team.logo)
            }
            $teamList.append($option);
        }, this);
        if (data) {
            $("#botype").val(data.match);
            $("#team_1_score").val("0").val(data.team_1.map_score);
            $("#team_2_score").val("0").val(data.team_2.map_score);
            $("#team_1").val("auto").val(data.team_1.team);
            $("#team_2").val("auto").val(data.team_2.team);
            $("#map_pick_1").val("auto").val(data.map_pick.map1);
            $("#map_pick_2").val("auto").val(data.map_pick.map2);
            $("#map_pick_3").val("auto").val(data.map_pick.map3);
            $("#map_playing").val("auto").val(data.map_pick.map_current);
            $("#swapsides").val("auto").val(data.map_pick.sides_swap);
            $("#map_1_right_result").val("auto").val(data.map_1_res.map_right_res);
            $("#map_1_left_result").val("auto").val(data.map_1_res.map_left_res);
            $("#map_2_right_result").val("auto").val(data.map_2_res.map_right_res);
            $("#map_2_left_result").val("auto").val(data.map_2_res.map_left_res);
            $("#map_3_right_result").val("auto").val(data.map_3_res.map_right_res);
            $("#map_3_left_result").val("auto").val(data.map_3_res.map_left_res);
            $("#server").val("auto").val(data.server.server_type);
    }

    if ($("#botype").val() == "bo3") {
        $("#delete").show();
        $("#delete_1").show();
        $("#delete_2").show();
    } else {
        $("#delete").hide();
        $("#delete_1").hide();
        $("#delete_2").hide();
    }

        $("select").formSelect();
    });
}
$(document).ready(() => {
    $("#delete").hide();
    $("#delete_1").hide();
    $("#delete_2").hide();
    $("#set").click(() => {
        if ($("#botype").val() == "bo3") {
            $("#delete").show();
            $("#delete_1").show();
            $("#delete_2").show();
        } else {
            $("#delete").hide();
            $("#delete_1").hide();
            $("#delete_2").hide();
        }
        let match = {
            match: $("#botype").val(),
            team_1: {
                map_score: $("#team_1_score").val(),
                team: $("#team_1").val()
            },
            team_2: {
                map_score: $("#team_2_score").val(),
                team: $("#team_2").val()
            },
            map_pick: {
                map1: $("#map_pick_1").val(),
                map2: $("#map_pick_2").val(),
                map3: $("#map_pick_3").val(),
                map_current: $("#map_playing").val(),
                sides_swap: $("#swapsides").val()
            },
            map_1_res: {
                map_right_res: $("#map_1_right_result").val(),
                map_left_res: $("#map_1_left_result").val()
            },
            map_2_res: {
                map_right_res: $("#map_2_right_result").val(),
                map_left_res: $("#map_2_left_result").val()
            },
            map_3_res: {
                map_right_res: $("#map_3_right_result").val(),
                map_left_res: $("#map_3_left_result").val(),
            },
            server: {
                server_type: $("#server").val()
            }
        };
        io.emit("update_match", match);
    });
    $("#swap").click(() => {
        let match = {
            match: $("#botype").val(),
            team_2: {
                team: $("#team_1").val()
            },
            team_1: {
                team: $("#team_2").val()
            },
            map_pick: {
                map1: $("#map_pick_1").val(),
                map2: $("#map_pick_2").val(),
                map3: $("#map_pick_3").val(),
                map_current: $("#map_playing").val(),
                sides_swap: $("#swapsides").val(),
            },
            map_1_res: {
                map_right_res: $("#map_1_left_result").val(),
                map_left_res: $("#map_1_right_result").val()
            },
            map_2_res: {
                map_right_res: $("#map_2_left_result").val(),
                map_left_res: $("#map_2_right_result").val()
            },
            map_3_res: {
                map_right_res: $("#map_3_left_result").val(),
                map_left_res: $("#map_3_right_result").val()
            },
            server: {
                server_type: $("#server").val()
            }
        };
        if($("#team_1_score").val() == "0") { 
            if($("#team_2_score").val() == "2"){
                match.team_2.map_score = "2";
                match.team_1.map_score = "0";
            }
            else if($("#team_2_score").val() == "1"){
                match.team_2.map_score = "2";
                match.team_1.map_score = "1";
            }
            else if($("#team_2_score").val() == "0"){
                match.team_2.map_score = "2";
                match.team_1.map_score = "2";
            }
        } else if($("#team_1_score").val() == "2") {
            if($("#team_2_score").val() == "2"){
                match.team_2.map_score = "0";
                match.team_1.map_score = "0";
            }
            else if($("#team_2_score").val() == "1"){
                match.team_2.map_score = "0";
                match.team_1.map_score = "1";
            }
            else if($("#team_2_score").val() == "0"){
                match.team_2.map_score = "0";
                match.team_1.map_score = "2";
            }
        } else if($("#team_1_score").val() == "1") {
            if($("#team_2_score").val() == "2"){
                match.team_2.map_score = "1";
                match.team_1.map_score = "0";
            }
            else if($("#team_2_score").val() == "1"){
                match.team_2.map_score = "1";
                match.team_1.map_score = "1";
            }
            else if($("#team_2_score").val() == "0"){
                match.team_2.map_score = "1";
                match.team_1.map_score = "2";
            }
        }

        io.emit("update_match", match);
    });

    $("#ref").click(() => {
        io.emit("refresh", true);
    });
    io.on('match', loadMatch);
    loadMatch();
    io.emit("ready", true);

});