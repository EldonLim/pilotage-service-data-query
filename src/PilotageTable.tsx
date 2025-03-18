import React from 'react';
import './App.css'

interface PilotageData {
    pilotage_cst_dt_time: string | null;
    pilotage_arrival_dt_time: string | null;
    pilotage_onboard_dt_time: string | null;
    pilotage_start_dt_time: string | null;
    pilotage_end_dt_time: string | null;
    pilotage_snapshot_dt: string;
    pilotage_nm: string;
    pilotage_imo: string;
    pilotage_loc_from_code: string;
    pilotage_loc_to_code: string;
  }

/*
example data structure
{
        "pilotage_cst_dt_time": "2025-03-18T11:10:25.988Z",
        "pilotage_arrival_dt_time": null,
        "pilotage_onboard_dt_time": null,
        "pilotage_start_dt_time": null,
        "pilotage_end_dt_time": null,
        "pilotage_snapshot_dt": "2025-03-18T11:10:25.988Z",
        "pilotage_nm": "MARITIME TUNTIGA",
        "pilotage_imo": "9276688",
        "pilotage_loc_from_code": "AEBB",
        "pilotage_loc_to_code": "PEBGC"
    },
*/

interface TableProps {
    data: PilotageData[] | null;
}

const formatDateTime = (dateTime: string | null) => {
    if (!dateTime) return "-";
    try {
      return new Date(dateTime).toLocaleString();
    } catch {
      return "-";
    }
  };

  const PilotageTable: React.FC<TableProps> = ({ data }) => {
    return (
      <div>
        <h2>Pilotage Data</h2>
        <div className='table-wrapper'>
            <table border={1}>
            <thead>
                <tr>
                <th>Vessel Name</th>
                <th>IMO Number</th>
                <th>Request Time</th>
                <th>Arrival Time</th>
                <th>Pilot Onboard Time</th>
                <th>Pilotage Start Time</th>
                <th>Pilotage End Time</th>
                <th>From Location</th>
                <th>To Location</th>
                </tr>
            </thead>
            <tbody>
                {data ? (
                    data.map((entry, index) => (
                        <tr key={index}>
                        <td>{entry.pilotage_nm || "Unknown"}</td>
                        <td>{entry.pilotage_imo || "Unknown"}</td>
                        <td>{formatDateTime(entry.pilotage_cst_dt_time)}</td>
                        <td>{formatDateTime(entry.pilotage_arrival_dt_time)}</td>
                        <td>{formatDateTime(entry.pilotage_onboard_dt_time)}</td>
                        <td>{formatDateTime(entry.pilotage_start_dt_time)}</td>
                        <td>{formatDateTime(entry.pilotage_end_dt_time)}</td>
                        <td>{entry.pilotage_loc_from_code || "Unknown"}</td>
                        <td>{entry.pilotage_loc_to_code || "Unknown"}</td>
                        </tr>
                    ))
                ) : (
                <tr>
                    <td colSpan={9} style={{ textAlign: "center" }}>No data available</td>
                </tr>
                )}
            </tbody>
            </table>
        </div>
        
      </div>
    );
  };

export default PilotageTable;
