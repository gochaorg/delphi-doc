unitData = {
  "frozen" : false,
  "declaration" : {
    "start" : {
      "fileName" : "Map.pas",
      "lineNumber" : 1,
      "charNumber" : 0
    },
    "end" : {
      "fileName" : "Map.pas",
      "lineNumber" : 291,
      "charNumber" : 3
    }
  },
  "name" : [ "Map" ],
  "uses" : [ [ "SysUtils" ], [ "Variants" ], [ "Classes" ] ],
  "comments" : [ {
    "text" : "// Ключ-значение\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 11,
      "charNumber" : 4
    }
  }, {
    "text" : "// Возвращает кол-во пар\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 13,
      "charNumber" : 6
    }
  }, {
    "text" : "// возвращает значение по указанному ключу\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 16,
      "charNumber" : 6
    }
  }, {
    "text" : "// проверка наличия ключа\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 19,
      "charNumber" : 6
    }
  }, {
    "text" : "// получение имени ключа по его индексу (0 - первый)\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 22,
      "charNumber" : 6
    }
  }, {
    "text" : "// добавление/замена занчения\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 25,
      "charNumber" : 6
    }
  }, {
    "text" : "// аргумент\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 26,
      "charNumber" : 6
    }
  }, {
    "text" : "//   name - ключ\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 27,
      "charNumber" : 6
    }
  }, {
    "text" : "//   значение\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 28,
      "charNumber" : 6
    }
  }, {
    "text" : "// возваращает\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 29,
      "charNumber" : 6
    }
  }, {
    "text" : "//   предыдущее значение\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 30,
      "charNumber" : 6
    }
  }, {
    "text" : "// удаление значения\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 33,
      "charNumber" : 6
    }
  }, {
    "text" : "// аргумент\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 34,
      "charNumber" : 6
    }
  }, {
    "text" : "//   name - ключ\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 35,
      "charNumber" : 6
    }
  }, {
    "text" : "// возваращает\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 36,
      "charNumber" : 6
    }
  }, {
    "text" : "//   предыдущее значение\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 37,
      "charNumber" : 6
    }
  }, {
    "text" : "// Создает текстовое представление\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 40,
      "charNumber" : 6
    }
  }, {
    "text" : "// { ключ=значение, ключ=значение, ... }\r\n",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 41,
      "charNumber" : 6
    }
  }, {
    "text" : "{ TStringPair }",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 87,
      "charNumber" : 0
    }
  }, {
    "text" : "{ TStringMap }",
    "position" : {
      "fileName" : "Map.pas",
      "lineNumber" : 117,
      "charNumber" : 0
    }
  } ],
  "types" : [ {
    "@type" : "InterfaceType$Named",
    "frozen" : false,
    "parents" : [ ],
    "body" : [ {
      "@type" : "Function",
      "frozen" : false,
      "name" : "count",
      "arguments" : [ ],
      "returns" : "Integer",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ {
        "text" : "// Возвращает кол-во пар\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 13,
          "charNumber" : 6
        }
      } ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 14,
          "charNumber" : 6
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 14,
          "charNumber" : 29
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "get",
      "arguments" : [ {
        "frozen" : false,
        "name" : "name",
        "type" : "String",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Variant",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ {
        "text" : "// возвращает значение по указанному ключу\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 16,
          "charNumber" : 6
        }
      } ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 17,
          "charNumber" : 6
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 17,
          "charNumber" : 41
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "exists",
      "arguments" : [ {
        "frozen" : false,
        "name" : "name",
        "type" : "String",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Boolean",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ {
        "text" : "// проверка наличия ключа\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 19,
          "charNumber" : 6
        }
      } ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 20,
          "charNumber" : 6
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 20,
          "charNumber" : 44
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "key",
      "arguments" : [ {
        "frozen" : false,
        "name" : "index",
        "type" : "Integer",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "String",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ {
        "text" : "// получение имени ключа по его индексу (0 - первый)\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 22,
          "charNumber" : 6
        }
      } ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 23,
          "charNumber" : 6
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 23,
          "charNumber" : 42
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "put",
      "arguments" : [ {
        "frozen" : false,
        "name" : "name",
        "type" : "String",
        "expression" : null,
        "direction" : "Input"
      }, {
        "frozen" : false,
        "name" : "value",
        "type" : "Variant",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Variant",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ {
        "text" : "// добавление/замена занчения\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 25,
          "charNumber" : 6
        }
      }, {
        "text" : "// аргумент\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 26,
          "charNumber" : 6
        }
      }, {
        "text" : "//   name - ключ\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 27,
          "charNumber" : 6
        }
      }, {
        "text" : "//   значение\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 28,
          "charNumber" : 6
        }
      }, {
        "text" : "// возваращает\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 29,
          "charNumber" : 6
        }
      }, {
        "text" : "//   предыдущее значение\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 30,
          "charNumber" : 6
        }
      } ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 31,
          "charNumber" : 6
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 31,
          "charNumber" : 56
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "delete",
      "arguments" : [ {
        "frozen" : false,
        "name" : "name",
        "type" : "String",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Variant",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ {
        "text" : "// удаление значения\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 33,
          "charNumber" : 6
        }
      }, {
        "text" : "// аргумент\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 34,
          "charNumber" : 6
        }
      }, {
        "text" : "//   name - ключ\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 35,
          "charNumber" : 6
        }
      }, {
        "text" : "// возваращает\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 36,
          "charNumber" : 6
        }
      }, {
        "text" : "//   предыдущее значение\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 37,
          "charNumber" : 6
        }
      } ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 38,
          "charNumber" : 6
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 38,
          "charNumber" : 44
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "toString",
      "arguments" : [ ],
      "returns" : "String",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ {
        "text" : "// Создает текстовое представление\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 40,
          "charNumber" : 6
        }
      }, {
        "text" : "// { ключ=значение, ключ=значение, ... }\r\n",
        "position" : {
          "fileName" : "Map.pas",
          "lineNumber" : 41,
          "charNumber" : 6
        }
      } ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 42,
          "charNumber" : 6
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 42,
          "charNumber" : 33
        }
      },
      "implementation" : null
    } ],
    "guid" : null,
    "declaration" : null,
    "implementation" : null,
    "comments" : [ ],
    "name" : [ "Map", "IStringMap" ]
  }, {
    "@type" : "ClassType.Named",
    "name" : [ "Map", "TStringMap" ],
    "parents" : [ {
      "@type" : "UnitTypeRef",
      "unit" : [ "Map" ],
      "type" : {
        "name" : [ "TInterfacedObject" ],
        "params" : [ ]
      }
    }, {
      "@type" : "UnitTypeRef",
      "unit" : [ "Map" ],
      "type" : {
        "name" : [ "IStringMap" ],
        "params" : [ ]
      }
    } ],
    "comments" : [ ],
    "specifier" : "Default",
    "body" : [ {
      "@type" : "Field",
      "frozen" : false,
      "name" : "list",
      "fieldType" : {
        "@type" : "UnitTypeRef",
        "unit" : [ "Map" ],
        "type" : {
          "name" : [ "TList" ],
          "params" : [ ]
        }
      },
      "visibility" : "Private",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 46,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 46,
          "charNumber" : 19
        }
      }
    }, {
      "@type" : "Constructor",
      "frozen" : false,
      "name" : "Create",
      "arguments" : [ ],
      "returns" : "Void",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 48,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 48,
          "charNumber" : 28
        }
      },
      "implementation" : null
    }, {
      "@type" : "Constructor",
      "frozen" : false,
      "name" : "Copy",
      "arguments" : [ {
        "frozen" : false,
        "name" : "sample",
        "type" : {
          "@type" : "ClassType.Named",
          "_recursive" : true
        },
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Void",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 49,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 49,
          "charNumber" : 44
        }
      },
      "implementation" : null
    }, {
      "@type" : "Constructor",
      "frozen" : false,
      "name" : "Copyi",
      "arguments" : [ {
        "frozen" : false,
        "name" : "sample",
        "type" : {
          "@type" : "UnitTypeRef",
          "unit" : [ "Map" ],
          "type" : {
            "name" : [ "IStringMap" ],
            "params" : [ ]
          }
        },
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Void",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 50,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 50,
          "charNumber" : 45
        }
      },
      "implementation" : null
    }, {
      "@type" : "Destructor",
      "frozen" : false,
      "name" : "Destroy",
      "arguments" : [ ],
      "returns" : "Void",
      "directives" : [ { } ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 51,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 51,
          "charNumber" : 38
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "count",
      "arguments" : [ ],
      "returns" : "Integer",
      "directives" : [ { } ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 53,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 53,
          "charNumber" : 40
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "get",
      "arguments" : [ {
        "frozen" : false,
        "name" : "name",
        "type" : "String",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Variant",
      "directives" : [ { } ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 54,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 54,
          "charNumber" : 52
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "exists",
      "arguments" : [ {
        "frozen" : false,
        "name" : "name",
        "type" : "String",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Boolean",
      "directives" : [ { } ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 55,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 55,
          "charNumber" : 55
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "key",
      "arguments" : [ {
        "frozen" : false,
        "name" : "index",
        "type" : "Integer",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "String",
      "directives" : [ { } ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 56,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 56,
          "charNumber" : 53
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "put",
      "arguments" : [ {
        "frozen" : false,
        "name" : "name",
        "type" : "String",
        "expression" : null,
        "direction" : "Input"
      }, {
        "frozen" : false,
        "name" : "value",
        "type" : "Variant",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Variant",
      "directives" : [ { } ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 58,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 58,
          "charNumber" : 67
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "delete",
      "arguments" : [ {
        "frozen" : false,
        "name" : "name",
        "type" : "String",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Variant",
      "directives" : [ { } ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 59,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 59,
          "charNumber" : 55
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "toString",
      "arguments" : [ ],
      "returns" : "String",
      "directives" : [ { } ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 61,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 61,
          "charNumber" : 44
        }
      },
      "implementation" : null
    } ]
  }, {
    "@type" : "InterfaceType$Named",
    "frozen" : false,
    "parents" : [ {
      "@type" : "UnitTypeRef",
      "unit" : [ "Map" ],
      "type" : {
        "name" : [ "IInterface" ],
        "params" : [ ]
      }
    } ],
    "body" : [ {
      "@type" : "Function",
      "frozen" : false,
      "name" : "getName",
      "arguments" : [ ],
      "returns" : "String",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 65,
          "charNumber" : 6
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 65,
          "charNumber" : 32
        }
      },
      "implementation" : null
    }, {
      "@type" : "InterfaceItem$Broken",
      "message" : "property name not implemented"
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "getValue",
      "arguments" : [ ],
      "returns" : "Variant",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 68,
          "charNumber" : 6
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 68,
          "charNumber" : 34
        }
      },
      "implementation" : null
    }, {
      "@type" : "Procedure",
      "frozen" : false,
      "name" : "setValue",
      "arguments" : [ {
        "frozen" : false,
        "name" : "value",
        "type" : "Variant",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Void",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 69,
          "charNumber" : 6
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 69,
          "charNumber" : 41
        }
      },
      "implementation" : null
    }, {
      "@type" : "InterfaceItem$Broken",
      "message" : "property value not implemented"
    } ],
    "guid" : null,
    "declaration" : null,
    "implementation" : null,
    "comments" : [ ],
    "name" : [ "Map", "IStringPair" ]
  }, {
    "@type" : "ClassType.Named",
    "name" : [ "Map", "TStringPair" ],
    "parents" : [ {
      "@type" : "UnitTypeRef",
      "unit" : [ "Map" ],
      "type" : {
        "name" : [ "TInterfacedObject" ],
        "params" : [ ]
      }
    }, {
      "@type" : "UnitTypeRef",
      "unit" : [ "Map" ],
      "type" : {
        "name" : [ "IStringPair" ],
        "params" : [ ]
      }
    }, {
      "@type" : "UnitTypeRef",
      "unit" : [ "Map" ],
      "type" : {
        "name" : [ "IInterface" ],
        "params" : [ ]
      }
    } ],
    "comments" : [ ],
    "specifier" : "Default",
    "body" : [ {
      "@type" : "Field",
      "frozen" : false,
      "name" : "name",
      "fieldType" : "String",
      "visibility" : "Private",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 74,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 74,
          "charNumber" : 19
        }
      }
    }, {
      "@type" : "Field",
      "frozen" : false,
      "name" : "value",
      "fieldType" : "Variant",
      "visibility" : "Private",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 75,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 75,
          "charNumber" : 21
        }
      }
    }, {
      "@type" : "Constructor",
      "frozen" : false,
      "name" : "Create",
      "arguments" : [ {
        "frozen" : false,
        "name" : "name",
        "type" : "String",
        "expression" : null,
        "direction" : "Input"
      }, {
        "frozen" : false,
        "name" : "value",
        "type" : "Variant",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Void",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 77,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 77,
          "charNumber" : 56
        }
      },
      "implementation" : null
    }, {
      "@type" : "Destructor",
      "frozen" : false,
      "name" : "Destroy",
      "arguments" : [ ],
      "returns" : "Void",
      "directives" : [ { } ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 78,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 78,
          "charNumber" : 38
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "getName",
      "arguments" : [ ],
      "returns" : "String",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 80,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 80,
          "charNumber" : 34
        }
      },
      "implementation" : null
    }, {
      "@type" : "Function",
      "frozen" : false,
      "name" : "getValue",
      "arguments" : [ ],
      "returns" : "Variant",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 81,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 81,
          "charNumber" : 36
        }
      },
      "implementation" : null
    }, {
      "@type" : "Procedure",
      "frozen" : false,
      "name" : "setValue",
      "arguments" : [ {
        "frozen" : false,
        "name" : "value",
        "type" : "Variant",
        "expression" : null,
        "direction" : "Input"
      } ],
      "returns" : "Void",
      "directives" : [ ],
      "visibility" : "Public",
      "comments" : [ ],
      "declaration" : {
        "start" : {
          "fileName" : "Map.pas",
          "lineNumber" : 82,
          "charNumber" : 8
        },
        "end" : {
          "fileName" : "Map.pas",
          "lineNumber" : 82,
          "charNumber" : 43
        }
      },
      "implementation" : null
    } ]
  } ]
}