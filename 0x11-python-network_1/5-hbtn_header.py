#!/usr/bin/python3
"""script that takes in a URL, sends a request"""
import requests
import sys

if __name__ == "__main__":
    try:
        r = requests.get(sys.argv[1])
        print(r.headers['X-Request-Id'])
    except:
        pass
