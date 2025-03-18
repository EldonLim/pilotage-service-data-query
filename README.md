# Pilotage Service Data Query Interface

## Setup Instructions
1. Clone the repository

2. Install dependency
`npm install`

3. Start the project
`npm start`

## Assumptions
- IMO number follows the validation formula where it has exactly 7 digits and the last digit is a checksum.
- API returns pilotage data in expected format.

## Features
- IMO validation before search.
- Displays data in human-readable format.
- Handles API errors gracefully and alerting the user.