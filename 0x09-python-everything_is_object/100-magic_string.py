#!/usr/bin/python3
def magic_string(i=[0]):
    i[0] += 1
    return "Holberton" + (", Holberton" * (i[0] - 1))
