// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const main = (
  projectId = process.env.GOOGLE_CLOUD_PROJECT,
  cloudRegion = 'us-central1',
  datasetId,
  fhirStoreId,
  resourceType,
  resourceId
) => {
  // [START healthcare_list_resource_history]
  const {google} = require('googleapis');
  const healthcare = google.healthcare('v1');

  const listFhirResourceHistory = async () => {
    const auth = await google.auth.getClient({
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    google.options({auth});

    // TODO(developer): uncomment these lines before running the sample
    // const cloudRegion = 'us-central1';
    // const projectId = 'adjective-noun-123';
    // const datasetId = 'my-dataset';
    // const fhirStoreId = 'my-fhir-store';
    // const resourceType = 'Patient';
    // const resourceId = '16e8a860-33b3-49be-9b03-de979feed14a';
    const name = `projects/${projectId}/locations/${cloudRegion}/datasets/${datasetId}/fhirStores/${fhirStoreId}/fhir/${resourceType}/${resourceId}/_history`;
    const request = {name};

    const resource =
      await healthcare.projects.locations.datasets.fhirStores.fhir.read(
        request
      );
    console.log(JSON.stringify(resource.data, null, 2));
  };

  listFhirResourceHistory();
  // [END healthcare_list_resource_history]
};

// node listFhirResourceHistory.js <projectId> <cloudRegion> <datasetId> <fhirStoreId> <resourceType> <resourceId>
main(...process.argv.slice(2));
