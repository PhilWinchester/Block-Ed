class Helper():
    def strip_unicode(self, json):
        new_dict = {}
        for key in json:
            k = str(key)
            if isinstance(json[key], unicode):
                v = str(json[key])
            else:
                v = json[key]
            new_dict[k] = v
            # print type(k), type(v)
        return new_dict

    def convert_elections(self, elections):
        return_data = {}
        for e in elections:
            return_data['name'] = e.name
            return_data['id'] = e.id
            return_data['options'] = e.options
        return return_data
