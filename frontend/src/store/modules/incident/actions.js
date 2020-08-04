export function incidentRequest(data) {
  return {
    type: '@incident/INCIDENT_REQUEST',
    payload: { data },
  }
}