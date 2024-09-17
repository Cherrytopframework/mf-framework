#!/bin/bash


### #Creating a new component

# 1. Create a new page as a child page of the Micro.Components notion notebook page and start editing. voila
# 2. The new component page ID will be automatically registered in the Micro.components shell application and automagically start bringing in the content from the new notion page.
# 3. Create the component in the appropriate directory
#     1. *todo*: write a script that will do both of these. 
# 4. Write out a starter template for the component bringing in commonly used components and controllers.
# 5. Expose the component as a Federated Module from the shell application.


# Variables
COMPONENT_NAME=$1
COMPONENT_PATH='./src/components/custom/${COMPONENT_NAME}'
NOTION_API_KEY=${process.env.NOTION_API_KEY}

# Step 1: Create a new directory
mkdir ${COMPONENT_PATH}

# Step 2: Create a new component/index.tsx file and add a starter template
cat <<EOT > {COMPONENT_PATH}/index.tsx
import React from 'react';
import { useUtilityStore } from 'app/utilities/store/utilityStore';

const ${COMPONENT_NAME} = () => {
    const utilityStore = useUtilityStore();
    return (
        <div>
            ${COMPONENT_NAME}
        </div>
    )
}
EOT

echo "Component ${COMPONENT_NAME} created."

# Step 3: Update the webpack.config.js file to expose the new component in the ModuleFederationPlugin
# ...

echo "Updated webpack.config.js to expose ${COMPONENT_NAME}."

# Step 4: Create a new notion page to document the new component
curl 'https://api.notion.com/v1/pages' \
    -H 'Authorization: Bearer '"$NOTION_API_KEY"'' \
    -H "Content-Type: application/json" \
    -H "Notion-Version: 2022-06-28" \
    --data '{
        "parent": { "page_id": "2a822d5eac094df39981588809928086" },
        "properties": {
            "Name": {
                "title": [
                    {
                        "text": {
                            "content": ${COMPONENT_NAME}
                        }
                    }
                ]
            },
        }
    }'

echo "Created new page in Notion for component ${COMPONENT_NAME}."

# Step 5: Open the new page in the browser
open -a "Google Chrome" "https://www.notion.so/${COMPONENT_NAME}-2a822d5eac094df39981588809928086"