#!/bin/python3
import sys
import yaml
import subprocess
nargs = len(sys.argv)

filename = sys.argv[1]

with open(filename) as file:
    docs = yaml.load_all(file, Loader=yaml.SafeLoader)
    for doc in docs:
        with open("SEALED-" + doc["metadata"]["name"] + ".json", "w") as outFile:
            process = subprocess.Popen(
                "kubeseal", stdin=subprocess.PIPE, stdout=outFile)
            process.stdin.write(
                yaml.dump(doc, default_flow_style=False).encode())
            process.communicate()
#
# DB_HOST: mongodb+srv://k8s-demo-usr:elHnGnXtumJyRx30@hierophant.fww9g1c.mongodb.net/k8s-demo-test?retryWrites=true&w=majority
# GITHUB_ID: 2903c3e2c61167d8e899
# GITHUB_SECRET: ea03bf653a7d1b713525817b6dbb743582cc6fc6
# NEXTAUTH_SECRET: 8c2fba5821daa091e11f4d1d899483b4
#
