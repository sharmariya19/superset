/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { SuperChart } from '@superset-ui/core';
import dummyDatasource from '../../../../../shared/dummyDatasource';
import data from '../data';

export const yAxisBounds = () => (
  <div className="container">
    <h2>yAxisBounds</h2>
    <pre>yAxisBounds=undefined</pre>
    <SuperChart
      chartType="prediction_line"
      width={400}
      height={200}
      datasource={dummyDatasource}
      queriesData={[{ data }]}
      formData={{
        richTooltip: true,
        showLegend: false,
        vizType: 'prediction_line',
      }}
    />
    <pre>yAxisBounds=[0, 60000]</pre>
    <SuperChart
      chartType="prediction_line"
      width={400}
      height={200}
      datasource={dummyDatasource}
      queriesData={[{ data }]}
      formData={{
        richTooltip: true,
        showLegend: false,
        vizType: 'prediction_line',
        yAxisBounds: [0, 60000],
      }}
    />
    <pre>yAxisBounds=[null, 60000]</pre>
    <SuperChart
      chartType="prediction_line"
      width={400}
      height={200}
      datasource={dummyDatasource}
      queriesData={[{ data }]}
      formData={{
        richTooltip: true,
        showLegend: false,
        vizType: 'line',
        yAxisBounds: [null, 60000],
      }}
    />
    <pre>yAxisBounds=[40000, null]</pre>
    <SuperChart
      chartType="prediction_line"
      width={400}
      height={200}
      datasource={dummyDatasource}
      queriesData={[{ data }]}
      formData={{
        richTooltip: true,
        showLegend: false,
        vizType: 'prediction_line',
        yAxisBounds: [40000, null],
      }}
    />
    <pre>yAxisBounds=[40000, null] with Legend</pre>
    <SuperChart
      chartType="prediction_line"
      width={400}
      height={200}
      datasource={dummyDatasource}
      queriesData={[{ data }]}
      formData={{
        richTooltip: true,
        showLegend: true,
        vizType: 'prediction_line',
        yAxisBounds: [40000, null],
      }}
    />
  </div>
);
