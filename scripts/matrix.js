class Matrix extends Engine
{
    map = [];
    
    constructor(canvas, background_color, width, height)
    {
        super(canvas, background_color);
        this.width = width;
        this.height = height;

        this.createMap()
    }

    createMap()
    {
        for(let i = 0; i < this.height; i++)
        {
            this.map[i] = [];
            for(let j = 0; j < this.width; j++)
            {
                this.map[i][j] = false;
            }
        }
    }

    setConfig(cube_size, start_x, start_y)
    {
        this.cube_size = cube_size;
        this.start_x = start_x;
        this.start_y = start_y;
    }

    render()
    {
        if(this.is_working)
        {
            for(let y = 0; y < this.height; y++)
            {
                for(let x = 0; x < this.width; x++)
                {
                    let color = 'red';
                    if(this.map[y][x]) color = 'lime';

                    const cube = new Rectangle(x*this.cube_size + this.start_x, y*this.cube_size + this.start_y, this.cube_size, this.cube_size, color);
                    cube.render(this.context);
                }
            }
        }
    }

    addCube(x, y)
    {
        if(x < this.width && y < this.height && x >= 0 && y >= 0)
        {
            this.map[x][y] = true;
        }
    }
}