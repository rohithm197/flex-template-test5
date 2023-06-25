resource "twilio_taskrouter_workspaces_activities_v1" "offline" {
  workspace_sid = twilio_taskrouter_workspaces_v1.demo.sid
  friendly_name = "Offline"
  available     = false
}

resource "twilio_taskrouter_workspaces_activities_v1" "available" {
  workspace_sid = twilio_taskrouter_workspaces_v1.demo.sid
  friendly_name = "Available"
  available     = true
}

resource "twilio_taskrouter_workspaces_activities_v1" "unavailable" {
  workspace_sid = twilio_taskrouter_workspaces_v1.demo.sid
  friendly_name = "Unavailable"
  available     = false
}

resource "twilio_taskrouter_workspaces_activities_v1" "break" {
  workspace_sid = twilio_taskrouter_workspaces_v1.demo.sid
  friendly_name = "Break"
  available     = false
}

resource "twilio_taskrouter_workspaces_activities_v1" "on_a_task" {
  workspace_sid = twilio_taskrouter_workspaces_v1.demo.sid
  friendly_name = "On A Task"
  available     = true
}


